import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import TextComponent from "@/shared/components/text/text.component";

const TransactionListCardComponent: React.FC<{
  title: string;
  value: string;
}> = ({ title, value }) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="w-1/2">
        <TextComponent className="opacity-60">{title}</TextComponent>
      </View>
      <View className="w-1/2">
        <TextComponent className="text-right font-bold">{value}</TextComponent>
      </View>
    </View>
  );
};

export default memo(TransactionListCardComponent);

const styles = StyleSheet.create({});
