import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "@/screens/dashboard/screen/dashboard.screen";
import PayScreen from "@/screens/pay/screen/pay.screen";

export type TabParamList = {
  dashboard: undefined;
  pay: undefined;
  budget: undefined;
  cards: undefined;
  account: undefined;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Tab.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="pay"
        component={PayScreen}
        options={{
          title: "Pay",
        }}
      />
      <Tab.Screen
        name="budget"
        component={DashboardScreen}
        options={{
          title: "Budget",
        }}
      />
      <Tab.Screen
        name="cards"
        component={DashboardScreen}
        options={{
          title: "Cards",
        }}
      />
      <Tab.Screen
        name="account"
        component={DashboardScreen}
        options={{
          title: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(TabNavigation);

const styles = StyleSheet.create({});
