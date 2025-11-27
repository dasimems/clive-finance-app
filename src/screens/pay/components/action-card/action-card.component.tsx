import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import TextComponent from "@/shared/components/text/text.component";
import ChevronLeftIcon from "@/assets/icons/chevron-left.icon";

const ActionCardComponent: React.FC<{
  title: string;
  description: string;
  onPress: () => void;
}> = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.95}
      className="flex flex-row items-center gap-4"
    >
      <View className="flex-1 gap-2">
        <TextComponent className="text-primary-900">{title}</TextComponent>
        <TextComponent className="opacity-60 text-sm">
          {description}
        </TextComponent>
      </View>
      <View className="rotate-180">
        <ChevronLeftIcon size={20} color="#000000" />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ActionCardComponent);

const styles = StyleSheet.create({});
