import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import TextComponent from "../../text/text.component";
import BottomNavButtonComponent from "../bottom-nav-button/bottom-nav-button.component";
import HomeIcon from "@/assets/icons/home.icon";
import SendIcon from "@/assets/icons/send.icon";
import BudgetIcon from "@/assets/icons/budget.icon";
import CardIcon from "@/assets/icons/card.icon";
import AccountIcon from "@/assets/icons/account.icon";

type TButtonComponentPropType = {
  isActive: boolean;
};
const ICON_SIZE = 24,
  getIconColor = (isActive: boolean) => (isActive ? "#042915" : "#000000"),
  INACTIVE_OPACITY = 0.5,
  ACTIVE_OPACITY = 1;
const navButtomComponents: {
  [name: string]: (prop: TButtonComponentPropType) => React.ReactNode;
} = {
  dashboard: ({ isActive }) => (
    <BottomNavButtonComponent
      icon={
        <HomeIcon
          size={ICON_SIZE}
          color={getIconColor(isActive)}
          opacity={isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY}
        />
      }
      label="Home"
      isActive={isActive}
    />
  ),
  pay: ({ isActive }) => (
    <BottomNavButtonComponent
      icon={
        <SendIcon
          size={ICON_SIZE}
          color={getIconColor(isActive)}
          opacity={isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY}
        />
      }
      label="Pay"
      isActive={isActive}
    />
  ),
  budget: ({ isActive }) => (
    <BottomNavButtonComponent
      icon={
        <BudgetIcon
          size={ICON_SIZE}
          color={getIconColor(isActive)}
          opacity={isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY}
        />
      }
      label="Budget"
      isActive={isActive}
    />
  ),
  cards: ({ isActive }) => (
    <BottomNavButtonComponent
      icon={
        <CardIcon
          size={ICON_SIZE}
          color={getIconColor(isActive)}
          opacity={isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY}
        />
      }
      label="Cards"
      isActive={isActive}
    />
  ),
  account: ({ isActive }) => (
    <BottomNavButtonComponent
      icon={
        <AccountIcon
          size={ICON_SIZE}
          color={getIconColor(isActive)}
          opacity={isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY}
        />
      }
      label="Account"
      isActive={isActive}
    />
  ),
};

const BottomNavComponent: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { buildHref } = useLinkBuilder();
  const activeTab = state?.routes[state?.index];
  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-row items-center justify-between px-horizontal pt-5"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const buttonComponent = navButtomComponents?.[route.name];

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1"
          >
            {buttonComponent ? (
              buttonComponent({ isActive: isFocused })
            ) : (
              <TextComponent>{label?.toString()}</TextComponent>
            )}
          </PlatformPressable>
        );
      })}
    </SafeAreaView>
  );
};

export default memo(BottomNavComponent);

const styles = StyleSheet.create({});
