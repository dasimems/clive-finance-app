import { TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useMemo } from "react";
import { cva } from "class-variance-authority";
import TextComponent from "../../text/text.component";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "Del"];

const generateButtonStyles = cva(
  "items-center justify-center flex-1 rounded-2xl",
  {
    variants: {
      hasBackground: {
        true: "bg-secondary",
        false: null,
      },
    },
    defaultVariants: {
      hasBackground: false,
    },
  }
);

const splitKeysIntoGroups = (groupingCount: number = 3) => {
  const grouping: string[][] = [];
  for (let i = 0; i < KEYS.length; i++) {
    const keyIndex = i + 1;
    const calculatedGroupingIndex = Math.ceil(keyIndex / groupingCount);
    const groupingIndex = calculatedGroupingIndex - 1;
    const previousGroupingData = grouping[groupingIndex] || [];

    const newGroupedArray = [...previousGroupingData, KEYS[i]];
    grouping[groupingIndex] = newGroupedArray;
  }

  return grouping;
};

const KeyComponent: React.FC<{
  text: string;
  onPress?: (value: string) => void;
  deleteFunction?: () => void;
}> = ({ text, onPress = () => {}, deleteFunction = () => {} }) => {
  const isDelete = text?.toLowerCase() === "del";
  return (
    <TouchableOpacity
      onPress={() => {
        if (isDelete) {
          deleteFunction();
          return;
        }
        onPress(text);
      }}
      className={generateButtonStyles()}
    >
      <TextComponent className="text-lg font-semibold">{text}</TextComponent>
    </TouchableOpacity>
  );
};

const MemorizedKeyComponent = memo(KeyComponent);

const GroupKeysComponent: React.FC<{
  keys: string[];
  onPress?: (value: string) => void;
  deleteFunction?: () => void;
}> = ({ keys, onPress = () => {}, deleteFunction = () => {} }) => {
  return (
    <View className="flex-row items-stretch gap-4 flex-[0.3]">
      {keys.map((key) => (
        <MemorizedKeyComponent
          onPress={onPress}
          deleteFunction={deleteFunction}
          key={key}
          text={key}
        />
      ))}
    </View>
  );
};

const MemorizedGroupKeyComponent = memo(GroupKeysComponent);

const NumberKeyboardComponent: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value = "", onChange = () => {} }) => {
  const groupedKeys = useMemo(() => splitKeysIntoGroups(), []);
  const deleteFunction = useCallback(() => {
    const newValue = value.slice(0, value.length - 1);
    onChange(newValue);
  }, [value, onChange]);

  const onPress = useCallback(
    (key: string) => {
      const newValue = `${value || ""}${key}`;
      onChange(newValue);
    },
    [value, onChange]
  );
  return (
    <View className="flex-1 max-h-[280px] gap-4 justify-end">
      {groupedKeys.map((keys) => (
        <MemorizedGroupKeyComponent
          key={keys?.toString()}
          keys={keys}
          deleteFunction={deleteFunction}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

export default memo(NumberKeyboardComponent);
