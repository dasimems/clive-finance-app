import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const EyeOutlineIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 11.6667C3 11.6667 6.33333 5 12.1667 5C18 5 21.3333 11.6667 21.3333 11.6667C21.3333 11.6667 18 18.3333 12.1667 18.3333C6.33333 18.3333 3 11.6667 3 11.6667Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1665 14.1667C13.5472 14.1667 14.6665 13.0475 14.6665 11.6667C14.6665 10.286 13.5472 9.16675 12.1665 9.16675C10.7858 9.16675 9.6665 10.286 9.6665 11.6667C9.6665 13.0475 10.7858 14.1667 12.1665 14.1667Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(EyeOutlineIcon);
