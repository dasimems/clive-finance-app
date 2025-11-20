import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";
import LayerWrapperComponent from "../layer-wrapper/layer-wrapper.component";
import {
  LandingLayerThreeFirstImage,
  LandingLayerThreeSecondImage,
  LogoDefaultImage,
} from "@/assets/images";
import { LandingLayerThreeWavySvg } from "@/assets/svgs";
// import { Image } from "expo-image";

const LayerThreeComponent = () => {
  return (
    <LayerWrapperComponent>
      <View className="w-full h-[25%] rounded-full bg-black/10 overflow-hidden">
        <Image
          source={LandingLayerThreeFirstImage}
          className="size-full selection:object-cover"
          resizeMode="cover"
        />
      </View>
      <View className="w-full aspect-square rounded-full border border-black/20 items-center justify-center">
        <Image
          source={LogoDefaultImage}
          className="size-[40%] object-cover"
          // contentFit="contain"
        />
      </View>
      <View className="w-full flex-1 border border-black/20 rounded-full justify-end items-center">
        <LandingLayerThreeWavySvg width={20} height={55} />
      </View>
      <View className="w-full aspect-square rounded-full bg-black/10 overflow-hidden">
        <Image
          source={LandingLayerThreeSecondImage}
          className="size-full object-cover"
          resizeMode="cover"
        />
      </View>
    </LayerWrapperComponent>
  );
};

export default memo(LayerThreeComponent);

const styles = StyleSheet.create({});
