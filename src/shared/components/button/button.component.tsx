import {
  ActivityIndicator,
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

const buttonClassName = cva(
  "rounded-lg px-4 py-2 flex-row items-center justify-center gap-2",
  {
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
      isDisabled: {
        true: "opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
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
  isLoading?: boolean;
  textClassName?: string;
}

const ButtonComponent: React.FC<ButtonProps> = forwardRef<View, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      textClassName,
      isLoading,
      disabled,
      onPress,
      ...props
    },
    ref
  ) => {
    const isString = useMemo(() => typeof children === "string", [children]);
    return (
      <TouchableOpacity
        ref={ref}
        {...props}
        activeOpacity={isLoading || disabled ? 0.5 : 0.2}
        onPress={isLoading || disabled ? undefined : onPress}
        className={buttonClassName({
          variant,
          size,
          isDisabled: disabled || isLoading,
        })}
      >
        {isLoading && (
          <ActivityIndicator size={size === "sm" ? 10 : 10} color="white" />
        )}
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
