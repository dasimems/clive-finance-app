import { View, ViewProps } from "react-native";
import React, { forwardRef, memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@utils/classnames";

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  isSafeAreaView?: boolean;
}

const Container = forwardRef<View, ContainerProps>(
  ({ children, isSafeAreaView = false, className, ...props }, ref) => {
    if (isSafeAreaView) {
      return (
        <SafeAreaView ref={ref} className={cn("flex-1", className)} {...props}>
          {children}
        </SafeAreaView>
      );
    }
    return (
      <View ref={ref} className={cn("flex-1", className)} {...props}>
        {children}
      </View>
    );
  }
);

Container.displayName = "Container";

export default memo(Container);
