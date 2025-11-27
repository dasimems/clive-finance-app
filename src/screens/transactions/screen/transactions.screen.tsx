import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import ScreenHeaderComponent from "@/shared/components/headers/screen-header/screen-header.component";
import getTransactions from "@/shared/data/transactions";
import { FlashList } from "@shopify/flash-list";
import TransactionCardComponent from "@/shared/components/transaction/transaction-card/transaction-card.component";

const transactions = getTransactions(4000);

const TransactionScreen = () => {
  return (
    <ContainerComponent isSafeAreaView className="py-6">
      <ScreenHeaderComponent title="Transactions" className="px-horizontal" />
      <FlashList
        data={transactions}
        renderItem={({ item }) => (
          <TransactionCardComponent className="py-5" {...item} />
        )}
        keyExtractor={(item) => item.title}
        contentContainerClassName="px-horizontal gap-7"
      />
    </ContainerComponent>
  );
};

export default memo(TransactionScreen);

const styles = StyleSheet.create({});
