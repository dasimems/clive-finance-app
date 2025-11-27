import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const SendIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.39999 6.31997L15.89 3.48997C19.7 2.21997 21.77 4.29997 20.51 8.10997L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.22997 7.39999 6.31997Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.11 13.65L13.69 10.06"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(SendIcon);
