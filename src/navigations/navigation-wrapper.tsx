import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import UnauthenticatedNavigator from "./unauthenticated-navigation";
import AuthenticatedNavigator from "./authenticated-navigation";
import useUserStore from "@/shared/stores/user.store";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const NavigationWrapper = () => {
  const user = useUserStore((state) => state.user);
  return (
    <NavigationContainer theme={theme}>
      {!user && <UnauthenticatedNavigator />}
      {user && <AuthenticatedNavigator />}
    </NavigationContainer>
  );
};

export default memo(NavigationWrapper);

const styles = StyleSheet.create({});
