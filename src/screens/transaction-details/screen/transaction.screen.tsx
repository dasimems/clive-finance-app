import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo, useMemo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import HeaderComponent from "../components/header/header.component";
import TextComponent from "@/shared/components/text/text.component";
import { format } from "date-fns";
import DividerComponent from "@/shared/components/divider/divider.component";
import TransactionDetailsListCardComponent from "../components/transaction-details-list-card/transaction-details-list-card.component";

const TransactionDetailsScreen = () => {
  const formattedTransactionAmount = useMemo(() => {
    return Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(100000);
  }, []);
  return (
    <ContainerComponent isSafeAreaView edges={["top"]} className="">
      <HeaderComponent />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-7"
      >
        <View className="bg-primary py-4 px-horizontal w-full">
          <TextComponent className="text-white text-center">
            {format(new Date(), "do MMMM, yyyy. hh:mm a")}
          </TextComponent>
        </View>
        <View className="px-horizontal gap-10">
          <TransactionDetailsListCardComponent
            title="Transaction Amount"
            value={formattedTransactionAmount}
          />
          <TransactionDetailsListCardComponent
            title="Transaction Type"
            value={"INTER-BANK"}
          />
          <TransactionDetailsListCardComponent
            title="Sender"
            value={"Nnamdi Okeke"}
          />
          <TransactionDetailsListCardComponent
            title="Beneficiary"
            value={"Nnamdi Okeke\n162789176178\nZikora Bank"}
          />
          <TransactionDetailsListCardComponent
            title="Narration"
            value={"Bolt"}
          />
          <TransactionDetailsListCardComponent
            title="Reference"
            value={"547725CTD43892637Dv2436FTr6386"}
          />
          <TransactionDetailsListCardComponent
            title="Transaction Status"
            value={"Transfer Request Successful"}
          />
          <DividerComponent />
          <View className="gap-2">
            <TextComponent className="font-medium text-center uppercase">
              Disclaimer
            </TextComponent>
            <TextComponent className="opacity-60">
              Please review the details carefully; if discrepancies are noted,
              contact customer support within 24 hours. This receipt does not
              constitute a contractual obligation, and all transactions are
              subject to bank terms and conditions.
            </TextComponent>
          </View>
        </View>
        <View className="bg-primary py-4 px-horizontal w-full">
          <TextComponent className="text-white text-center">
            Contact us @zikora’s email and phone number
          </TextComponent>
        </View>
      </ScrollView>
    </ContainerComponent>
  );
};

export default memo(TransactionDetailsScreen);

const styles = StyleSheet.create({});
