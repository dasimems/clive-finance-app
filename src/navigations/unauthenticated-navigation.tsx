import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "@/screens/landing/screen/landing.screen";
import OtpScreen from "@/screens/otp/screen/otp.screen";

export type UnauthenticatedStackParamList = {
  landing: undefined;
  otp: undefined;
};

const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="landing"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;

const styles = StyleSheet.create({});
