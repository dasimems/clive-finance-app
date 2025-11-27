import {
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import TextComponent from "@/shared/components/text/text.component";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { cn } from "@/shared/utils/classnames";
import { getComponentLayoutProperties } from "@/shared/utils/functions";

export enum EModalHeaderButtonState {
  PERSONAL = "PERSONAL",
  BUSINESS = "BUSINESS",
}

const BUTTON_CLASSNAME = "p-1 py-3 flex-1 w-full z-10",
  TEXT_CLASSNAME = "text-center",
  ACTIVE_TEXT_CLASSNAME = "text-white",
  INACTIVE_TEXT_CLASSNAME = "text-black opacity-60";
const ModalHeaderComponent: React.FC<{
  activeState: EModalHeaderButtonState;
  onPress: (state: EModalHeaderButtonState) => void;
}> = ({ activeState, onPress = () => {} }) => {
  const translateX = useSharedValue(0);
  const [headerWidth, setHeaderWidth] = useState(0);
  const isActive = useCallback(
    (state: EModalHeaderButtonState) => activeState === state,
    [activeState]
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleHeaderContentLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = getComponentLayoutProperties(event);
    setHeaderWidth(width);
  }, []);

  const slideActiveBackground = useCallback(
    (state: EModalHeaderButtonState, headerWidth: number) => {
      if (headerWidth === 0) return;
      const activeWidth = headerWidth / 2;
      const isPersonalActive = isActive(EModalHeaderButtonState.PERSONAL);
      translateX.value = withTiming(isPersonalActive ? 0 : activeWidth);
    },
    [isActive]
  );

  useEffect(() => {
    if (headerWidth === 0) return;
    slideActiveBackground(activeState, headerWidth);
  }, [activeState, headerWidth]);

  return (
    <View className="p-1 w-full bg-[#E7E7E7] rounded-full">
      <View
        className="w-full flex-row items-center"
        onLayout={handleHeaderContentLayout}
      >
        <Animated.View
          className="w-1/2 bg-primary rounded-full h-full absolute left-0"
          style={[animatedStyle]}
        />
        <TouchableOpacity
          onPress={() => onPress(EModalHeaderButtonState.PERSONAL)}
          className={BUTTON_CLASSNAME}
        >
          <TextComponent
            className={cn(
              TEXT_CLASSNAME,
              isActive(EModalHeaderButtonState.PERSONAL) &&
                ACTIVE_TEXT_CLASSNAME,
              !isActive(EModalHeaderButtonState.PERSONAL) &&
                INACTIVE_TEXT_CLASSNAME
            )}
          >
            Personal Account
          </TextComponent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPress(EModalHeaderButtonState.BUSINESS)}
          className={BUTTON_CLASSNAME}
        >
          <TextComponent
            className={cn(
              TEXT_CLASSNAME,
              isActive(EModalHeaderButtonState.BUSINESS) &&
                ACTIVE_TEXT_CLASSNAME,
              !isActive(EModalHeaderButtonState.BUSINESS) &&
                INACTIVE_TEXT_CLASSNAME
            )}
          >
            Business Account
          </TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ModalHeaderComponent);

const styles = StyleSheet.create({});
