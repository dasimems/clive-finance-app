import { View } from "react-native";
import React, { memo, useEffect, useMemo, useState } from "react";
import { cva } from "class-variance-authority";
import { WINDOW_WIDTH } from "@utils/variables";
import TextComponent from "../../text/text.component";
import CircleExclamationIcon from "@/assets/icons/circle-exclamation.icon";

const getActiveBoxClassName = cva("!rounded-md", {
  variants: {
    isActive: {
      false: null,
      true: "border border-primary",
    },
    hasValue: {
      true: "bg-primary/5",
      false: "bg-black/5 dark:bg-white/5",
    },
  },
  defaultVariants: {
    isActive: false,
    hasValue: false,
  },
});

const TOTAL_BOX_CONTAINER_GAP = 40;

const getBoxesSize = (count: number) => {
  const width = WINDOW_WIDTH - TOTAL_BOX_CONTAINER_GAP - 40;
  const boxSize = width / count;
  const gapSize = TOTAL_BOX_CONTAINER_GAP / (count - 1);
  return { boxSize, gapSize };
};

const OTPInputBox: React.FC<{
  size: number;
  value: string;
  isActive?: boolean;
}> = ({ size, value, isActive = false }) => {
  return (
    <View
      style={{ width: size, height: size, maxHeight: 65 }}
      className={getActiveBoxClassName({ isActive, hasValue: !!value })}
    >
      <View className="items-center justify-center w-full h-full rounded-md">
        <TextComponent className="text-xl font-proximanova-bold text-primary">
          {value}
        </TextComponent>
      </View>
    </View>
  );
};

const MemorizedOTPBox = memo(OTPInputBox);

const OtpFormComponent: React.FC<{
  totalBoxes?: number;
  value: string;
  error?: string;
}> = ({ value = "", totalBoxes = 6, error }) => {
  const [otp, setOTP] = useState(new Array(totalBoxes).fill(""));
  useEffect(() => {
    const joinedOtp = otp.join("");
    if (joinedOtp !== value && joinedOtp.length <= totalBoxes) {
      setOTP((prevState) => prevState.map((_, index) => value[index] || ""));
    }
  }, [value, otp, totalBoxes]);
  const boxMeasurement = useMemo(() => getBoxesSize(totalBoxes), [totalBoxes]);
  return (
    <View className="gap-3">
      <View
        style={{ gap: boxMeasurement?.gapSize }}
        className="flex flex-row items-stretch justify-center"
      >
        {otp.map((otpValue, index) => (
          <MemorizedOTPBox
            value={otpValue}
            key={index}
            size={boxMeasurement?.boxSize}
            isActive={value.length === index}
          />
        ))}
      </View>
      {error && (
        <View className="flex flex-row items-start gap-2">
          <CircleExclamationIcon color="#ef4444" />
          <TextComponent className="text-sm text-red-500">
            {error}
          </TextComponent>
        </View>
      )}
    </View>
  );
};

export default memo(OtpFormComponent);
