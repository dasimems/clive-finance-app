import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import UnauthenticatedNavigator from "./unauthenticated-navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const NavigationWrapper = () => {
  return (
    <NavigationContainer theme={theme}>
      <UnauthenticatedNavigator />
    </NavigationContainer>
  );
};

export default memo(NavigationWrapper);

const styles = StyleSheet.create({});
