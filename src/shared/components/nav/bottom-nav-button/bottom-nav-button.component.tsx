import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import TextComponent from "../../text/text.component";
import { cn } from "@/shared/utils/classnames";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { getComponentLayoutProperties } from "@/shared/utils/functions";

const INITIAL_HEIGHT = 0,
  FINAL_HEIGHT = 38,
  INITIAL_WIDTH = 0;

const ActiveLightAnimation: React.FC<{
  isActive: boolean;
}> = memo(({ isActive }) => {
  const [buttonWidth, setButtonWidth] = useState(0);
  const height = useSharedValue(INITIAL_HEIGHT);
  const width = useSharedValue(INITIAL_WIDTH);
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));
  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    width: width.value,
  }));
  const animateHeight = useCallback(
    (isActive: boolean, buttonWidth: number) => {
      if (isActive) {
        width.value = withTiming(
          buttonWidth * 0.9,
          {
            duration: 100,
          },
          () => {
            height.value = withTiming(FINAL_HEIGHT, {
              duration: 300,
            });
          }
        );
        return;
      }
      height.value = withTiming(
        INITIAL_HEIGHT,
        {
          duration: 100,
        },
        () => {
          width.value = withTiming(INITIAL_HEIGHT, {
            duration: 100,
          });
        }
      );
    },
    []
  );
  const handleOnLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = getComponentLayoutProperties(event);
    setButtonWidth(width);
  }, []);

  useEffect(() => {
    animateHeight(isActive && buttonWidth > 0, buttonWidth);
  }, [isActive, buttonWidth]);
  return (
    <View
      onLayout={handleOnLayout}
      className="absolute top-0 left-1/2 -translate-x-[50%] w-full max-w-[50px] overflow-hidden"
    >
      <Animated.View
        className={cn("self-center h-[0.15rem] bg-primary")}
        style={[buttonAnimatedStyle]}
      />
      <Animated.View className={"w-full"} style={[animatedStyle]}>
        <View className={cn("w-[full] h-[38px] overflow-hidden")}>
          <LinearGradient
            colors={["rgba(94, 161, 122, 0.3)", "rgba(94, 161, 122, 0)"]}
            className="w-full h-full"
          />
          <View className="absolute -top-[19%] -right-[95%] -rotate-[15deg] bg-white w-full h-full" />
          <View className="absolute -top-[19%] -left-[95%] rotate-[15deg] bg-white w-full h-full" />
        </View>
      </Animated.View>
    </View>
  );
});

ActiveLightAnimation.displayName = "ActiveLightAnimation";

const BottomNavButtonComponent: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}> = ({ icon, label, isActive }) => {
  return (
    <View className="w-full h-20 items-center justify-end gap-2">
      <ActiveLightAnimation isActive={isActive} />
      <View className="w-full gap-2 z-10 items-center">
        {icon}
        <TextComponent
          className={cn(
            "text-xs",
            isActive && "text-primary-800 font-medium",
            !isActive && "opacity-60"
          )}
        >
          {label}
        </TextComponent>
      </View>
    </View>
  );
};

export default memo(BottomNavButtonComponent);

const styles = StyleSheet.create({});
