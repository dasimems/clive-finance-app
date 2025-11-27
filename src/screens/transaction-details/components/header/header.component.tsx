import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import TextComponent from "@/shared/components/text/text.component";
import CustomImageComponent from "@/shared/components/images/custom-image/custom-image.component";
import { LogoDefaultImage } from "@/assets/images";

const HeaderComponent = () => {
  return (
    <View className="px-horizontal py-6 w-full flex-row items-center gap-6">
      <CustomImageComponent source={LogoDefaultImage} className="size-10" />
      <View className="flex-1">
        <TextComponent className="uppercase text-lg font-medium text-center">
          Transaction Receipt
        </TextComponent>
      </View>
      <View className="size-10" />
    </View>
  );
};

export default memo(HeaderComponent);

const styles = StyleSheet.create({});
