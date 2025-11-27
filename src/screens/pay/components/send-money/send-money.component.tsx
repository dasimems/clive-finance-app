import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import TextComponent from "@/shared/components/text/text.component";
import ActionCardComponent from "../action-card/action-card.component";

const SendMoney = () => {
  return (
    <View className="gap-6 mt-6">
      <TextComponent className="text-primary-800 font-medium">
        Send Money
      </TextComponent>
      <ActionCardComponent
        title="Send money to Bank Account"
        description="Send money to any local banks in your region swiftly."
        onPress={() => {}}
      />
      <ActionCardComponent
        title="Send money via Phone Number/Email"
        description="Send money to any Zikora User by Email/Phone numbers."
        onPress={() => {}}
      />
    </View>
  );
};

export default memo(SendMoney);

const styles = StyleSheet.create({});
