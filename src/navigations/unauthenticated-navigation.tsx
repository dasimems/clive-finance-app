import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "@/screens/landing/screen/landing.screen";

export type UnauthenticatedStackParamList = {
  landing: undefined;
};

const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="landing"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="landing" component={LandingScreen} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;

const styles = StyleSheet.create({});
