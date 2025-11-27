import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsScreen from "@/screens/transactions/screen/transactions.screen";
import TabNavigation from "./tab-navigation";
import SendMoneyScreen from "@/screens/send-money/screen/send-money.screen";
import TransactionDetailsScreen from "@/screens/transaction-details/screen/transaction.screen";

export type AuthenticatedStackParamList = {
  tab: undefined;
  transactions: undefined;
  "send-money": undefined;
  "transaction-details": { id: string };
};

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="tab"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="tab" component={TabNavigation} />
      <Stack.Screen name="transactions" component={TransactionsScreen} />
      <Stack.Screen name="send-money" component={SendMoneyScreen} />
      <Stack.Screen
        name="transaction-details"
        component={TransactionDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default memo(AuthenticatedNavigation);

const styles = StyleSheet.create({});
