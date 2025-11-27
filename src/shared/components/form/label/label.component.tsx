import { Text, TextProps } from "react-native";
import React, { forwardRef, memo } from "react";
import TextComponent from "../../text/text.component";

type TLabelProps = {
  label?: string;
  isRequired?: boolean;
} & TextProps;

const Label = forwardRef<React.ComponentRef<typeof Text>, TLabelProps>(
  ({ label, ...props }, ref) => {
    if (!label) {
      return null;
    }
    return (
      <TextComponent ref={ref} {...props}>
        {label}
      </TextComponent>
    );
  }
);

Label.displayName = "Label";

export default memo(Label);
