import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";

const DashboardScreen = () => {
  return (
    <ContainerComponent isSafeAreaView>
      <ScrollView
        contentContainerClassName="px-horizontal"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      ></ScrollView>
    </ContainerComponent>
  );
};

export default memo(DashboardScreen);

const styles = StyleSheet.create({});
