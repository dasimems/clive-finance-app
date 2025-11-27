import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import LayerWrapperComponent from "../layer-wrapper/layer-wrapper.component";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { getComponentLayoutProperties } from "@/shared/utils/functions";

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
    console.log("width", width);
    console.log("height", height);
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
        className="bg-primary rounded-full p-4 w-full"
        style={[animatedStyle]}
      >
        <View className="w-full flex-1"></View>
        <View className="w-full aspect-square rounded-full bg-white"></View>
      </Animated.View>
    </LayerWrapperComponent>
  );
};

export default memo(LayerTwoComponent);

const styles = StyleSheet.create({});
