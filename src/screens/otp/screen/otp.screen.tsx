import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import NumberKeyboardComponent from "@/shared/components/form/keyboards/number-keyboard.component";
import TextComponent from "@/shared/components/text/text.component";
import OtpCountdownComponent from "@/shared/components/otp-countdown/otp-countdown.component";
import OtpFormComponent from "@/shared/components/form/otp-form/otp-form.component";
import ScreenHeaderComponent from "@/shared/components/headers/screen-header/screen-header.component";
import { showMessage } from "react-native-flash-message";
import useUserStore from "@/shared/stores/user.store";
import { useNetworkState } from "expo-network";

const VALID_OTP = "123456";

const OTPScreen = () => {
  const networkState = useNetworkState();
  const [otp, setOTP] = useState("");
  const [otpError, setOTPError] = useState<string | null>(null);
  const setUser = useUserStore((state) => state?.setUser);

  const handleOnOtpComplete = useCallback(
    (otp: string) => {
      console.log(networkState);
      if (!networkState.isConnected) {
        showMessage({
          message: "No internet connection",
          type: "danger",
        });
        setOTP("");
        return;
      }
      if (otp !== VALID_OTP) {
        setOTPError("Invalid OTP");
        setOTP("");
        return;
      }
      setOTPError(null);
      showMessage({
        message: "OTP verified successfully",
        type: "success",
      });
      setUser({
        name: "John Doe",
        firstName: "John",
        lastName: "Doe",
        accountNumber: "1234567890",
        balance: 1000,
      });
    },
    [networkState]
  );

  useEffect(() => {
    if (otp.length === 6) {
      handleOnOtpComplete(otp);
    }
  }, [otp]);
  return (
    <ContainerComponent isSafeAreaView className="py-6 gap-6">
      <ScreenHeaderComponent
        title="OTP Verification"
        className="px-horizontal"
      />
      <ContainerComponent className="px-horizontal justify-center items-center gap-6">
        <TextComponent className="text-center">
          Enter the OTP sent to your email
        </TextComponent>
        <View className="items-center gap-2">
          <OtpFormComponent
            value={otp}
            totalBoxes={6}
            error={otpError || undefined}
          />
        </View>
        <TouchableOpacity>
          <OtpCountdownComponent resendOTP={() => {}} expiryTime={120000} />
        </TouchableOpacity>
      </ContainerComponent>
      <NumberKeyboardComponent value={otp} onChange={setOTP} />
    </ContainerComponent>
  );
};

export default memo(OTPScreen);

const styles = StyleSheet.create({});
