import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import HeaderComponent from "../components/header/header.component";
import BeneficiariesComponent from "../components/beneficiaries/beneficiaries.component";
import SendMoneyComponent from "../components/send-money/send-money.component";
import PayBillsComponent from "../pay-bills/pay-bills.component";

const PayScreen = () => {
  return (
    <ContainerComponent isSafeAreaView className="py-6 gap-6">
      <HeaderComponent />
      <ScrollView contentContainerClassName="px-horizontal gap-7">
        <BeneficiariesComponent />
        <SendMoneyComponent />
        <PayBillsComponent />
      </ScrollView>
    </ContainerComponent>
  );
};

export default memo(PayScreen);

const styles = StyleSheet.create({});
