import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import ScreenHeaderComponent from "@/shared/components/headers/screen-header/screen-header.component";
import KeyboardViewLayout from "@/shared/components/keyboard-view/keyboard-view.layout";
import InputFieldComponent from "@/shared/components/form/input-field/input-field.component";
import ButtonComponent from "@/shared/components/button/button.component";

const DEFAULT_INPUT_CLASSNAME =
  "rounded-none border-l-0 border-r-0 border-t-0 border-b border-black/20";

const SendMoneyScreen = () => {
  return (
    <ContainerComponent isSafeAreaView className="py-6 gap-6">
      <ScreenHeaderComponent title="Send Money" className="px-horizontal" />
      <KeyboardViewLayout className="flex-1" contentContainerClassName="flex-1">
        <ScrollView
          contentContainerClassName="gap-7 px-horizontal"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <InputFieldComponent
            label="Account Number"
            placeholder="Enter account number"
            inputClassName={DEFAULT_INPUT_CLASSNAME}
          />
          <InputFieldComponent
            label="Amount"
            placeholder="Enter amount to be sent"
            inputClassName={DEFAULT_INPUT_CLASSNAME}
          />
          <InputFieldComponent
            label="Remark"
            placeholder="Remarks (e.g Shopping)"
            inputClassName={DEFAULT_INPUT_CLASSNAME}
          />
          <ButtonComponent>Continue</ButtonComponent>
        </ScrollView>
      </KeyboardViewLayout>
    </ContainerComponent>
  );
};

export default memo(SendMoneyScreen);

const styles = StyleSheet.create({});
