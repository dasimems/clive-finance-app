import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import TextComponent from "@/shared/components/text/text.component";

const HeaderComponent = () => {
  return (
    <View className="px-horizontal">
      <TextComponent className="text-xl text-center font-medium">
        Pay
      </TextComponent>
    </View>
  );
};

export default memo(HeaderComponent);

const styles = StyleSheet.create({});
