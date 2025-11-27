import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { UserLandingImage } from "@/assets/images";
import { LandingLayerOneWavySvg } from "@/assets/svgs";
import LayerWrapperComponent from "../layer-wrapper/layer-wrapper.component";
import CustomImageComponent from "@/shared/components/images/custom-image/custom-image.component";

const LayerOneComponent = () => {
  return (
    <LayerWrapperComponent>
      <View className="border border-black/20 w-full flex-1 rounded-full justify-between items-center p-4 pb-0">
        <View className="size-6 rounded-full bg-primary"></View>
        <LandingLayerOneWavySvg width={20} height={55} />
      </View>
      <View className="rounded-full w-full aspect-square bg-black/10 overflow-hidden">
        <CustomImageComponent
          source={UserLandingImage}
          className="w-full h-full object-cover"
        />
      </View>
      <View className="flex-1 w-full bg-primary rounded-full"></View>
    </LayerWrapperComponent>
  );
};

export default memo(LayerOneComponent);

const styles = StyleSheet.create({});
