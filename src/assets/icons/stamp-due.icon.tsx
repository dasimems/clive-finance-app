import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const StampDueIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M4.80001 1.59998H14.4C15.28 1.59998 16 2.31998 16 3.19998V6.65598H3.20001V3.19998C3.20001 2.31998 3.92001 1.59998 4.80001 1.59998Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.20007 6.65601V9.504C3.20007 10.368 3.6641 11.168 4.4241 11.592L6.79207 12.928C7.29607 13.208 7.60808 13.744 7.60808 14.32V16C7.60808 16.88 8.32808 17.6 9.20808 17.6H10.0081C10.8881 17.6 11.6081 16.88 11.6081 16V14.32C11.6081 13.744 11.9201 13.208 12.4241 12.928L14.7921 11.592C15.5441 11.168 16.0161 10.368 16.0161 9.504V6.65601H3.20007Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(StampDueIcon);
