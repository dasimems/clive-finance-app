import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import LayerWrapperComponent from "../layer-wrapper/layer-wrapper.component";

const LayerFourComponent = () => {
  return (
    <LayerWrapperComponent>
      <View className="w-full aspect-square rounded-full border border-black/20 items-center justify-center">
        <View className="size-7 rounded-full bg-primary" />
      </View>
      <View className="w-full h-[30%] rounded-full bg-primary"></View>
      <View className="flex-1 border border-black/20 rounded-full" />
    </LayerWrapperComponent>
  );
};

export default memo(LayerFourComponent);

const styles = StyleSheet.create({});
