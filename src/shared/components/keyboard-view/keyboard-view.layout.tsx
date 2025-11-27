import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { memo } from "react";
import { IS_IOS } from "../../../../utils/variables";
import { dismissKeyboard } from "../../../../utils/functions";
import clsx from "clsx";
import { cn } from "../../../../utils/class-names";

const KeyboardViewLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
  contentContainerClassName?: string;
}> = ({ children, className, contentContainerClassName }) => {
  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      className={cn(clsx("", className))}
    >
      <View className={cn(clsx("", contentContainerClassName))}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default memo(KeyboardViewLayout);
