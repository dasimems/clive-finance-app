import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import TextComponent from "@/shared/components/text/text.component";

const WelcomeText = () => {
  return (
    <View className="self-start rounded-full border border-black/10">
      <LinearGradient
        colors={[
          "rgba(135, 216, 169, 0.7)",
          "rgba(102, 166, 129, 0)",
          "rgba(135, 216, 169, 0.5)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="py-3 px-4 rounded-full"
      >
        <TextComponent>Welcome to Zikora Bank</TextComponent>
      </LinearGradient>
    </View>
  );
};

export default memo(WelcomeText);

const styles = StyleSheet.create({});
