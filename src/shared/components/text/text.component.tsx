import { Text, TextProps } from "react-native";
import React, { forwardRef, memo } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/classnames";
const getTextClassName = cva(["text-text font-proximanova"], {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
export type TTextComponentProp = {
  size?: "small" | "medium" | "large";
} & TextProps;
const TextComponent = forwardRef<
  React.ComponentRef<typeof Text>,
  TTextComponentProp
>(({ size, className, children, ...props }, ref) => {
  return (
    <Text
      className={cn(getTextClassName({ size }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </Text>
  );
});

TextComponent.displayName = "Text component";

export default memo(TextComponent);
