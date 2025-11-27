import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const CheckIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 17" fill="none" {...props}>
      <Path
        d="M3.79105 9.1048C3.59579 8.90953 3.2792 8.90953 3.08394 9.1048C2.88868 9.30006 2.88868 9.6166 3.08394 9.81186L6.08394 12.8119C6.2792 13.0071 6.59579 13.0071 6.79105 12.8119L14.1244 5.47855C14.3196 5.28329 14.3196 4.9667 14.1244 4.77144C13.9291 4.57618 13.6126 4.57618 13.4173 4.77144L6.4375 11.7512L3.79105 9.1048Z"
        fill={color}
      />
    </Svg>
  );
};

export default memo(CheckIcon);
