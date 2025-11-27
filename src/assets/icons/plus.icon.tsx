import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const PlusIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6 12H18"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 18V6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(PlusIcon);
