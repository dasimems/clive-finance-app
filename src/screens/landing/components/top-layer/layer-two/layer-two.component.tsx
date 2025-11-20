import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import LayerWrapperComponent from "../layer-wrapper/layer-wrapper.component";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const LayerTwoComponent = () => {
  // const animatedHeight = useSharedValue(0);
  // const animatedStyle = useAnimatedStyle(() => ({
  //   height: animatedHeight.value,
  // }));
  return (
    <LayerWrapperComponent className="justify-end">
      <View className="bg-primary rounded-full p-4 h-full">
        <View className="w-full flex-1"></View>
        <View className="w-full aspect-square rounded-full bg-white"></View>
      </View>
    </LayerWrapperComponent>
  );
};

export default memo(LayerTwoComponent);

const styles = StyleSheet.create({});
