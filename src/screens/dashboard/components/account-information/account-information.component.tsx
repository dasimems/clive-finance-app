import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useMemo, useState } from "react";
import TextComponent from "@/shared/components/text/text.component";
import useUserStore from "@/shared/stores/user.store";
import EyeOpenOutlineIcon from "@/assets/icons/eye-open-outline.icon";
import EyeSlashOutlineIcon from "@/assets/icons/eye-slash-outline.icon";
import CopyIcon from "@/assets/icons/copy.icon";
import * as Clipboard from "expo-clipboard";
import { showMessage } from "react-native-flash-message";

const ICON_SIZE = 20,
  ICON_OPACITY = 0.7;

const AccountInformationComponent = () => {
  const [shouldShowBalance, setShouldShowBalance] = useState(false);
  const accountNumber = useUserStore((state) => state?.user?.accountNumber);
  const balance = useUserStore((state) => state?.user?.balance);
  const formattedBalance = useMemo(() => {
    return Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(balance || 0);
  }, [balance]);
  const handleCopyAccountNumber = useCallback(async () => {
    try {
      await Clipboard.setStringAsync(accountNumber || "");
      showMessage({
        type: "success",
        message: "Account number copied to clipboard",
      });
    } catch (error) {
      showMessage({
        type: "danger",
        message: "Failed to copy account number",
      });
    }
  }, [accountNumber]);
  return (
    <View className="gap-4">
      <View className="flex flex-row items-center gap-1">
        <TextComponent className="text-sm opacity-60">
          Account Number:
        </TextComponent>
        <TextComponent className="font-medium text-sm">
          {accountNumber}
        </TextComponent>
        <TouchableOpacity
          activeOpacity={0.95}
          onPress={handleCopyAccountNumber}
        >
          <CopyIcon size={16} opacity={ICON_OPACITY} />
        </TouchableOpacity>
      </View>

      <View className="gap-1">
        <TextComponent className="">Your Balance</TextComponent>
        <View className="flex-row items-center justify-between">
          <TextComponent className="text-2xl font-medium">
            {shouldShowBalance ? formattedBalance : "********"}
          </TextComponent>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => setShouldShowBalance((prevState) => !prevState)}
          >
            {shouldShowBalance && (
              <EyeOpenOutlineIcon size={ICON_SIZE} opacity={ICON_OPACITY} />
            )}
            {!shouldShowBalance && (
              <EyeSlashOutlineIcon size={ICON_SIZE} opacity={ICON_OPACITY} />
            )}
          </TouchableOpacity>
        </View>
        <TextComponent className="text-xs opacity-60">
          Last Updated: 20 mins ago
        </TextComponent>
      </View>
    </View>
  );
};

export default memo(AccountInformationComponent);

const styles = StyleSheet.create({});
