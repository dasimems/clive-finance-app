import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const MoneySendIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M7.59998 11C7.59998 11.776 8.19999 12.4 8.93599 12.4H10.44C11.08 12.4 11.6 11.856 11.6 11.176C11.6 10.448 11.28 10.184 10.808 10.016L8.39998 9.17599C7.92798 9.00799 7.60798 8.75199 7.60798 8.01599C7.60798 7.34399 8.12797 6.79199 8.76797 6.79199H10.272C11.008 6.79199 11.608 7.41599 11.608 8.19199"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.59998 6V13.2"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6 9.59998C17.6 14.016 14.016 17.6 9.59998 17.6C5.18398 17.6 1.59998 14.016 1.59998 9.59998C1.59998 5.18398 5.18398 1.59998 9.59998 1.59998"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6 4.79998V1.59998H14.4"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.6 5.59998L17.6 1.59998"
        stroke={color}
        stroke-width="1.27358"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default memo(MoneySendIcon);
