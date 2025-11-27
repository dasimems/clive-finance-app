import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import ScreenHeaderComponent from "@/shared/components/headers/screen-header/screen-header.component";
import KeyboardViewLayout from "@/shared/components/keyboard-view/keyboard-view.layout";
import InputFieldComponent from "@/shared/components/form/input-field/input-field.component";
import ButtonComponent from "@/shared/components/button/button.component";
import SelectFieldComponent from "@/shared/components/form/select-field/select-field.component";
import TextComponent from "@/shared/components/text/text.component";

const DEFAULT_INPUT_CLASSNAME =
  "rounded-none border-l-0 border-r-0 border-t-0 border-b border-black/20";

const AMOUNTS = [50, 100, 500, 1000];

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
          <SelectFieldComponent
            label="Choose Bank"
            listContainerClassName="max-h-[65vh]"
            options={new Array(10).fill(0).map((_, index) => ({
              label: `Bank ${index + 1}`,
              value: `bank-${index + 1}`,
            }))}
          />
          <SelectFieldComponent
            label="Your account"
            listContainerClassName="max-h-[65vh]"
            options={new Array(2).fill(0).map((_, index) => ({
              label: `Account ${index + 1}`,
              value: `account-${index + 1}`,
            }))}
          />
          <InputFieldComponent
            label="Account Number"
            placeholder="Enter account number"
            inputClassName={DEFAULT_INPUT_CLASSNAME}
          />
          <View className="gap-3">
            <InputFieldComponent
              label="Amount"
              placeholder="Enter amount to be sent"
              inputClassName={DEFAULT_INPUT_CLASSNAME}
            />
            <TextComponent className="text-red-500 text-sm">
              This transfer will attract a charge or N
            </TextComponent>
            <View className="flex flex-row items-center gap-4">
              {AMOUNTS.map((amount) => (
                <TouchableOpacity
                  key={amount}
                  className="py-1 px-4 border border-black/20 rounded-full items-center justify-center"
                >
                  <TextComponent className="text-primary-800 text-sm">
                    {amount}
                  </TextComponent>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <SelectFieldComponent
            label="Category"
            listContainerClassName="max-h-[65vh]"
            options={new Array(6).fill(0).map((_, index) => ({
              label: `Category ${index + 1}`,
              value: `category-${index + 1}`,
            }))}
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
