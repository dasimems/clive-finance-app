import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const ChevronLeftIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default memo(ChevronLeftIcon);
