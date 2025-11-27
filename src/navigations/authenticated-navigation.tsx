import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsScreen from "@/screens/transactions/screen/transactions.screen";
import TabNavigation from "./tab-navigation";

export type AuthenticatedStackParamList = {
  tab: undefined;
  transactions: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="tab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="tab" component={TabNavigation} />
      <Stack.Screen name="transactions" component={TransactionsScreen} />
    </Stack.Navigator>
  );
};

export default memo(AuthenticatedNavigation);

const styles = StyleSheet.create({});
