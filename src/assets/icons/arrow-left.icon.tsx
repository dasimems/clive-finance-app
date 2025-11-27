import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import { TSVGIconProp } from "./types";

const ArrowLeftIcon: React.FC<TSVGIconProp> = ({
  size = 16,
  color = "#000000",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size * (16 / 17)}
      viewBox="0 0 17 16"
      fill="none"
      {...props}
    >
      <Path
        d="M7.65513 13.1937C7.85507 13.3841 8.1716 13.3764 8.36207 13.1765C8.55253 12.9765 8.5448 12.66 8.34487 12.4695L4.17725 8.4998H14C14.2761 8.4998 14.5 8.27593 14.5 7.9998C14.5 7.72367 14.2761 7.4998 14 7.4998H4.17718L8.34487 3.53001C8.5448 3.33955 8.55247 3.02307 8.36207 2.82311C8.1716 2.62317 7.85507 2.61547 7.65513 2.80593L2.70919 7.51707C2.59657 7.62433 2.52994 7.76113 2.50929 7.9034C2.50319 7.9346 2.5 7.96687 2.5 7.9998C2.5 8.03287 2.50321 8.06513 2.50932 8.0964C2.53001 8.2386 2.59664 8.37533 2.70919 8.48253L7.65513 13.1937Z"
        fill={color}
      />
    </Svg>
  );
};

export default memo(ArrowLeftIcon);
