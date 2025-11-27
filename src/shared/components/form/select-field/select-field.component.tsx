import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import LabelComponent from "../label/label.component";
import TextComponent from "../../text/text.component";
import { cn } from "@/shared/utils/classnames";
import ChevronLeftIcon from "@/assets/icons/chevron-left.icon";
import DraggableModal from "../../modals/draggable-modal/draggable-modal";
import CheckIcon from "@/assets/icons/check.icon";
import { SafeAreaView } from "react-native-safe-area-context";

type TSelectOption = {
  label: string;
  value: string;
};

type TSelectFieldComponentProps = {
  label?: string;
  error?: string;
  value?: string;
  options?: TSelectOption[];
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  selectButtonClassName?: string;
  listContainerClassName?: string;
  onChange?: (option: TSelectOption) => void;
};

const SelectFieldComponent: React.FC<TSelectFieldComponentProps> = ({
  label,
  placeholder,
  selectButtonClassName,
  options,
  listContainerClassName,
  value,
  error,
  onChange,
  labelClassName,
  className,
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(
    null
  );
  useEffect(() => {
    if (value && options && options.length > 0) {
      setSelectedOption(
        options?.find((option) => option.value === value) || null
      );
    }
  }, [value]);
  return (
    <>
      <View className={cn("gap-2", className)}>
        <LabelComponent label={label} className={labelClassName} />
        <TouchableOpacity
          onPress={() => setIsOptionsOpen(true)}
          className={cn(
            "w-full py-4 px-4 flex-row items-center justify-between border rounded-lg",
            error && "border-red-500",
            !error && "border-black/20",
            selectButtonClassName
          )}
        >
          <View className="flex-1">
            <TextComponent className={cn("", !selectedOption && "opacity-60")}>
              {selectedOption?.label || placeholder || "Select an option"}
            </TextComponent>
          </View>
          <View className="-rotate-90">
            <ChevronLeftIcon size={20} opacity={0.7} />
          </View>
        </TouchableOpacity>
        {error && (
          <TextComponent className="text-sm text-red-500">
            {error}
          </TextComponent>
        )}
      </View>
      <DraggableModal
        onClose={() => setIsOptionsOpen(false)}
        visible={isOptionsOpen}
        contentContainerClassName={listContainerClassName}
      >
        <SafeAreaView edges={["bottom"]}>
          {options && options.length > 0 && (
            <ScrollView
              contentContainerClassName="gap-4"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {options?.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => {
                    setSelectedOption(option);
                    setIsOptionsOpen(false);
                    onChange?.(option);
                  }}
                  className="py-4 px-4 flex-row items-center justify-between"
                >
                  <View className="flex-1">
                    <TextComponent>{option.label}</TextComponent>
                  </View>
                  {selectedOption?.value === option.value && (
                    <View className="size-4">
                      <CheckIcon size={16} color="#000000" />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          {(!options || options.length === 0) && (
            <View className="min-h-96 items-center justify-center">
              <TextComponent className="text-center text-black/50">
                No options available
              </TextComponent>
            </View>
          )}
        </SafeAreaView>
      </DraggableModal>
    </>
  );
};

export default memo(SelectFieldComponent);

const styles = StyleSheet.create({});
