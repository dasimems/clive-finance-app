import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import TextComponent from "@/shared/components/text/text.component";
import ActionCardComponent from "../components/action-card/action-card.component";

const PayBills = () => {
  return (
    <View className="gap-6 mt-6">
      <TextComponent className="text-primary-800 font-medium">
        Pay Bills
      </TextComponent>
      <ActionCardComponent
        title="Buy Airtime"
        description="Buy Airtime to your Phone number"
        onPress={() => {}}
      />
      <ActionCardComponent
        title="Pay a Bill"
        description="Pay your utility bill, buy data swiftly."
        onPress={() => {}}
      />
    </View>
  );
};

export default memo(PayBills);

const styles = StyleSheet.create({});
