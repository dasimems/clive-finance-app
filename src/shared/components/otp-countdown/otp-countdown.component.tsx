import { convertMilliseconds } from "@/shared/utils/functions";
import React, { memo, useEffect, useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";
import TextComponent from "../text/text.component";

type TOTPCountdown = {
  expiryTime?: number;
  resendOTP: () => void;
  loading?: boolean;
};

const TIMER_COUNT = 120000;

const OTPCountdown: React.FC<TOTPCountdown> = ({
  resendOTP,
  loading,
  expiryTime,
}) => {
  const [msRemaining, setMsRemaining] = useState(0);

  const timing = useMemo(() => convertMilliseconds(msRemaining), [msRemaining]);

  useEffect(() => {
    if (msRemaining <= 0) return;

    const interval = setInterval(() => {
      setMsRemaining((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [msRemaining]);

  useEffect(() => {
    if (expiryTime) {
      setMsRemaining(TIMER_COUNT);
    }
  }, [expiryTime]);

  return (
    <>
      {msRemaining > 0 && (
        <TextComponent className="text-sm">
          Resend in{" "}
          <TextComponent className="text-primary text-sm font-medium">
            {timing?.hours ? `${timing?.hours}:` : ""}
            {timing?.minutes}:{timing.seconds}
          </TextComponent>
        </TextComponent>
      )}
      {msRemaining <= 0 && (
        <TouchableOpacity
          onPress={() => {
            if (loading) {
              return;
            }
            resendOTP();
          }}
        >
          <TextComponent className="text-center text-sm">
            Didn't get the code?{" "}
            <TextComponent className="font-bold text-sm">
              Send again
            </TextComponent>
          </TextComponent>
        </TouchableOpacity>
      )}
    </>
  );
};

export default memo(OTPCountdown);
