import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback } from "react";
import TransactionCardComponent, {
  TTransactionCardProp,
} from "../../../../shared/components/transaction/transaction-card/transaction-card.component";
import TextComponent from "../../../../shared/components/text/text.component";

const TransactionList: React.FC<{
  transactions: TTransactionCardProp[];
  title?: string;
  seeAllAction?: () => void;
}> = ({ transactions, title, seeAllAction }) => {
  const renderItem = useCallback(
    (item: TTransactionCardProp, index: number) => {
      return <TransactionCardComponent {...item} key={index} />;
    },
    []
  );
  return (
    <View className="gap-7">
      {(title || seeAllAction) && (
        <View className="flex-row items-center gap-4 justify-between">
          {title && <TextComponent>{title}</TextComponent>}
          {seeAllAction && (
            <TouchableOpacity activeOpacity={0.95} onPress={seeAllAction}>
              <TextComponent className="text-xs opacity-70">
                See All
              </TextComponent>
            </TouchableOpacity>
          )}
        </View>
      )}
      {transactions.map(renderItem)}
    </View>
  );
};

export default memo(TransactionList);

const styles = StyleSheet.create({});
