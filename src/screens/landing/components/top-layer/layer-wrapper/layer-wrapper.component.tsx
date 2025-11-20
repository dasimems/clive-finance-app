import { cn } from "@/shared/utils/classnames";
import React, { memo } from "react";
import { View, ViewProps } from "react-native";

const LayerWrapper: React.FC<ViewProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <View
      className={cn("flex-1 h-full max-w-[70px] gap-6", className)}
      {...props}
    >
      {children}
    </View>
  );
};

export default memo(LayerWrapper);
