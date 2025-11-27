import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import HeaderComponent from "../components/header/header.component";
import AccountInformationComponent from "../components/account-information/account-information.component";
import ActionPanelComponent from "../components/actions-panel/action-panel.component";
import getTransactions from "@/shared/data/transactions";
import TransactionList from "@/screens/dashboard/components/transaction-list/transaction-list";

const TRANSACTIONS = getTransactions(10);

const DashboardScreen = () => {
  return (
    <ContainerComponent isSafeAreaView className="py-6">
      <ScrollView
        contentContainerClassName="px-horizontal gap-7"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <HeaderComponent />
        <AccountInformationComponent />
        <ActionPanelComponent />
        <TransactionList
          title="Recent Transactions"
          seeAllAction={() => {}}
          transactions={TRANSACTIONS}
        />
      </ScrollView>
    </ContainerComponent>
  );
};

export default memo(DashboardScreen);

const styles = StyleSheet.create({});
