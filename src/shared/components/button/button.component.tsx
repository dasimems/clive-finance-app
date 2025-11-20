import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { forwardRef, memo, useMemo } from "react";
import TextComponent from "../text/text.component";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/shared/utils/classnames";

const buttonClassName = cva("rounded-lg px-4 py-2", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      tertiary: "bg-tertiary text-white",
      outline: "bg-transparent border border-primary text-primary",
    },
    size: {
      sm: "py-1 px-2",
      md: "py-4 px-4",
      lg: "py-3 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
const textVariantClassName = cva("font-inter text-center text-white", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    variant: {
      primary: "text-white",
      secondary: "text-black",
      tertiary: "text-black",
      outline: "text-primary",
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
});
interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonClassName> {
  children: React.ReactNode;
  textClassName?: string;
}

const ButtonComponent: React.FC<ButtonProps> = forwardRef<View, ButtonProps>(
  ({ children, variant, size, textClassName, ...props }, ref) => {
    const isString = useMemo(() => typeof children === "string", [children]);
    return (
      <TouchableOpacity
        ref={ref}
        {...props}
        className={buttonClassName({ variant, size })}
      >
        {isString ? (
          <TextComponent
            className={cn(
              textVariantClassName({ size, variant }),
              textClassName
            )}
          >
            {children}
          </TextComponent>
        ) : (
          children
        )}
      </TouchableOpacity>
    );
  }
);

ButtonComponent.displayName = "ButtonComponent";

export default memo(ButtonComponent);

const styles = StyleSheet.create({});
