import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import LayerWrapperComponent from "../layer-wrapper/layer-wrapper.component";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { getComponentLayoutProperties } from "@/shared/utils/functions";
import TextComponent from "@/shared/components/text/text.component";
import { cn } from "@/shared/utils/classnames";

const TEXT = "New Age Banking";

const LayerTwoComponent = () => {
  const [containerLayoutMeasurement, setContainerLayoutMeasurement] = useState({
    height: 0,
    width: 0,
  });
  const animatedHeight = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));
  const handleOnLayout = useCallback((event: LayoutChangeEvent) => {
    const { height, width } = getComponentLayoutProperties(event);
    setContainerLayoutMeasurement({ height, width });
    animatedHeight.value = withTiming(width);
  }, []);
  const animatedToOriginalHeight = useCallback((height: number) => {
    if (!height) return;
    animatedHeight.value = withTiming(height, {
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    const heightToAnimateTo = containerLayoutMeasurement.height;
    if (heightToAnimateTo === 0) return;
    animatedToOriginalHeight(heightToAnimateTo);
  }, [containerLayoutMeasurement.height]);
  return (
    <LayerWrapperComponent onLayout={handleOnLayout} className="justify-end">
      <Animated.View
        className="bg-primary rounded-full p-4 w-full gap-3"
        style={[animatedStyle]}
      >
        <View className="w-full flex-1 flex-col items-center justify-end">
          {TEXT.split("")
            .reverse()
            .map((letter, index) => (
              <View
                key={index}
                className={cn(
                  "-rotate-[90deg] -mb-3 items-center w-full justify-center ml-1.5",
                  letter === "i" && "-mb-5",
                  index === TEXT.length && "-mb-5"
                )}
              >
                <TextComponent
                  key={index}
                  className="font-medium text-[3.5vh] leading-none text-white"
                >
                  {letter}
                </TextComponent>
              </View>
            ))}
        </View>
        <View className="w-full aspect-square rounded-full bg-white"></View>
      </Animated.View>
    </LayerWrapperComponent>
  );
};

export default memo(LayerTwoComponent);

const styles = StyleSheet.create({});
