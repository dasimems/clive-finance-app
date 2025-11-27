import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useMemo } from "react";
import TextComponent from "../../text/text.component";
import { cn } from "@/shared/utils/classnames";
import { format } from "date-fns";
import MoneySendIcon from "@/assets/icons/money-send.icon";
import MoneyReceiveIcon from "@/assets/icons/money-receive.icon";
import StampDueIcon from "@/assets/icons/stamp-due.icon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthenticatedStackParamList } from "@/navigations/authenticated-navigation";

export enum ETransactionType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

export enum EPaymentType {
  TRANSFER = "TRANSFER",
  STAMP_DUE = "STAMP_DUE",
  MTN_PURCHASE = "MTN_PURCHASE",
  AIRTEL_PURCHASE = "AIRTEL_PURCHASE",
  GLO_PURCHASE = "GLO_PURCHASE",
  ETISALAT_PURCHASE = "ETISALAT_PURCHASE",
}

export type TTransactionCardProp = {
  type: ETransactionType;
  paymentType: EPaymentType;
  title: string;
  amount: number;
  date: Date;
  className?: string;
};

const MOBILE_OPERATOR_PAYMENT_TYPES = [
  EPaymentType.MTN_PURCHASE,
  EPaymentType.AIRTEL_PURCHASE,
  EPaymentType.GLO_PURCHASE,
  EPaymentType.ETISALAT_PURCHASE,
];

const PaymentIcon: React.FC<{
  paymentType: EPaymentType;
  transactionType: ETransactionType;
}> = memo(({ paymentType, transactionType }) => {
  const shouldUseTransactionIcon = useMemo(() => {
    return !MOBILE_OPERATOR_PAYMENT_TYPES.includes(paymentType);
  }, [transactionType, paymentType]);
  return (
    <View
      className={cn(
        "size-10 rounded-full items-center justify-center overflow-hidden",
        shouldUseTransactionIcon &&
          transactionType === ETransactionType.DEBIT &&
          "bg-red-500/10",
        shouldUseTransactionIcon &&
          transactionType === ETransactionType.CREDIT &&
          "bg-green-500/10"
      )}
    >
      {shouldUseTransactionIcon && (
        <>
          {paymentType === EPaymentType.TRANSFER && (
            <>
              {transactionType === ETransactionType.DEBIT && (
                <MoneySendIcon size={20} color="red" />
              )}
              {transactionType === ETransactionType.CREDIT && (
                <MoneyReceiveIcon size={20} color="green" />
              )}
            </>
          )}
          {paymentType === EPaymentType.STAMP_DUE && (
            <StampDueIcon size={20} color="red" />
          )}
        </>
      )}
    </View>
  );
});

const TransactionCard: React.FC<TTransactionCardProp> = ({
  type,
  paymentType,
  title,
  amount,
  date,
  className,
}) => {
  const { navigate } =
    useNavigation<NavigationProp<AuthenticatedStackParamList>>();
  const formattedAmount = useMemo(() => {
    return Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount || 0);
  }, [amount]);
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={() => {
        navigate("transaction-details", { id: "1" });
      }}
      className={cn("flex-row items-center justify-between gap-4", className)}
    >
      <View className="flex-1 flex-row items-center justify-start gap-2">
        <PaymentIcon paymentType={paymentType} transactionType={type} />
        <View className="gap-1 flex-1">
          <TextComponent className="font-medium">{title}</TextComponent>
          <TextComponent className="opacity-60 text-xs">
            {format(date, "do MMMM, yyyy. hh:mm a")}
          </TextComponent>
        </View>
      </View>
      <TextComponent
        className={cn(
          type === ETransactionType.DEBIT && "text-red-500",
          type === ETransactionType.CREDIT && "text-green-500"
        )}
      >
        {" "}
        {type === ETransactionType.DEBIT ? "-" : "+"} {formattedAmount}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default memo(TransactionCard);

const styles = StyleSheet.create({});
