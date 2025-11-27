import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { cn } from "@/shared/utils/classnames";
import clsx from "clsx";

const DividerComponent: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <View className={cn(clsx("flex-1 border-b border-black/20", className))} />
  );
};

export default memo(DividerComponent);

const styles = StyleSheet.create({});
