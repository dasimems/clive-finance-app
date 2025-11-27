import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import CustomImageComponent from "@/shared/components/images/custom-image/custom-image.component";
import TextComponent from "@/shared/components/text/text.component";
import useUserStore from "@/shared/stores/user.store";
import PlusIcon from "@/assets/icons/plus.icon";

const HeaderComponent = () => {
  const firstName = useUserStore((state) => state?.user?.firstName);
  return (
    <View className="flex-row items-center justify-between bg-white py-5">
      <View className="flex-1 flex-row items-center gap-2">
        <CustomImageComponent className="size-10 bg-black/10 rounded-full" />
        <View className="gap-1">
          <TextComponent>Good Afternoon {firstName || "User"}</TextComponent>
          <TextComponent className="text-sm opacity-60">
            Welcome to Zikora
          </TextComponent>
        </View>
      </View>
      <TouchableOpacity className="bg-black/5 size-8 rounded-full items-center justify-center">
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

export default memo(HeaderComponent);

const styles = StyleSheet.create({});
