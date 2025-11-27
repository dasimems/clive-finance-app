import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const CopyIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M10.6667 8.59999V11.4C10.6667 13.7333 9.73337 14.6667 7.40004 14.6667H4.60004C2.26671 14.6667 1.33337 13.7333 1.33337 11.4V8.59999C1.33337 6.26666 2.26671 5.33333 4.60004 5.33333H7.40004C9.73337 5.33333 10.6667 6.26666 10.6667 8.59999Z"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.6667 4.59999V7.39999C14.6667 9.73333 13.7334 10.6667 11.4 10.6667H10.6667V8.59999C10.6667 6.26666 9.73337 5.33333 7.40004 5.33333H5.33337V4.59999C5.33337 2.26666 6.26671 1.33333 8.60004 1.33333H11.4C13.7334 1.33333 14.6667 2.26666 14.6667 4.59999Z"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default memo(CopyIcon);
