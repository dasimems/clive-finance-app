import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useMemo } from "react";
import TextComponent from "@/shared/components/text/text.component";
import { FlashList } from "@shopify/flash-list";

const BeneficiaryCard: React.FC<{ name: string }> = memo(({ name = "" }) => {
  const [firstName, lastName] = useMemo(() => name?.split(" "), [name]);
  return (
    <View className="items-center gap-2 max-w-20 mr-6">
      <View className="size-10 items-center justify-center bg-black/10 rounded-full">
        <TextComponent className="text-white uppercase font-medium">
          {name ? ` ${firstName?.[0]}${lastName?.[0]}` : "AN"}
        </TextComponent>
      </View>
      <TextComponent className="text-sm opacity-60 text-center">
        {name}
      </TextComponent>
    </View>
  );
});
BeneficiaryCard.displayName = "BeneficiaryCard";

const BeneficiariesComponent = () => {
  return (
    <View className="gap-6">
      <View className="flex-row items-center gap-6 justify-between">
        <TextComponent className="text-primary-800">
          Beneficiaries
        </TextComponent>
        <TouchableOpacity>
          <TextComponent className="text-xs opacity-70">See all</TextComponent>
        </TouchableOpacity>
      </View>
      <FlashList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        data={new Array(10).fill(0).map((_, index) => `John Doe ${index}`)}
        renderItem={({ item }) => <BeneficiaryCard name={item} />}
      />
    </View>
  );
};

export default memo(BeneficiariesComponent);

const styles = StyleSheet.create({});
