import { StyleSheet, Text, TextProps } from "react-native";
import React, { memo } from "react";
import { cn } from "@/shared/utils/classnames";

const TextComponent: React.FC<TextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text className={cn("font-inter", className)} {...props}>
      {children}
    </Text>
  );
};

export default memo(TextComponent);

const styles = StyleSheet.create({});
