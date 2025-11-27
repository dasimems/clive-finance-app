import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "@/screens/dashboard/screen/dashboard.screen";

export type AuthenticatedStackParamList = {
  dashboard: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default memo(AuthenticatedNavigation);

const styles = StyleSheet.create({});
