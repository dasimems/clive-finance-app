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
import { Controller, useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

const DEFAULT_INPUT_CLASSNAME =
  "rounded-none border-l-0 border-r-0 border-t-0 border-b border-black/20";

const AMOUNTS = [50, 100, 500, 1000];

type TSendMoneyForm = {
  amount: number;
  accountNumber: string;
  bank: string;
  accountOption: string;
  category: string;
  remark: string;
};

const schema = Joi.object({
  amount: Joi.number().required().min(50).max(100000).messages({
    "number.min": "Amount must be greater than 50",
    "number.max": "Amount must be less than 100000",
    "number.required": "Amount is required",
    "any.required": "Amount is required",
  }),
  accountNumber: Joi.string().required().min(10).max(10).messages({
    "string.min": "Account number must be 10 digits",
    "string.max": "Account number must be 10 digits",
    "string.required": "Account number is required",
    "any.required": "Account number is required",
  }),
  bank: Joi.string().required().messages({
    "string.required": "Bank is required",
    "any.required": "Bank is required",
  }),
  accountOption: Joi.string().required().messages({
    "string.required": "Please select account to debit",
    "any.required": "Please select account to debit",
  }),
  category: Joi.string().required().messages({
    "string.required": "Category is required",
    "any.required": "Category is required",
  }),
  remark: Joi.string().optional().allow("").messages({
    "string.required": "Remark is required",
    "any.required": "Remark is required",
  }),
});

const defaultValues: TSendMoneyForm = {
  amount: 0,
  accountNumber: "",
  accountOption: "",
  bank: "",
  category: "",
  remark: "",
};

const SendMoneyScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<TSendMoneyForm>({
    defaultValues,
    resolver: joiResolver(schema),
    mode: "onChange",
  });
  const { goBack } = useNavigation();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      showMessage({
        message: "Money sent successfully",
        type: "success",
      });
      reset();
      goBack();
    } catch (error) {
      showMessage({
        message: "Failed to send money",
        type: "danger",
      });
    }
  });
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
          <Controller
            control={control}
            name="bank"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <SelectFieldComponent
                label="Choose Bank"
                listContainerClassName="max-h-[65vh]"
                options={new Array(10).fill(0).map((_, index) => ({
                  label: `Bank ${index + 1}`,
                  value: `bank-${index + 1}`,
                }))}
                onChange={(option) => onChange(option?.value)}
                value={value || ""}
                error={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="accountOption"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <SelectFieldComponent
                label="Your account"
                listContainerClassName="max-h-[65vh]"
                options={new Array(2).fill(0).map((_, index) => ({
                  label: `Account ${index + 1}`,
                  value: `account-${index + 1}`,
                }))}
                onChange={(option) => onChange(option?.value)}
                value={value || ""}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="accountNumber"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputFieldComponent
                label="Account Number"
                placeholder="Enter account number"
                inputClassName={DEFAULT_INPUT_CLASSNAME}
                onChangeText={(text) => onChange(text)}
                value={value}
                error={error?.message}
                keyboardType="number-pad"
                inputMode="numeric"
              />
            )}
          />
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View className="gap-3">
                <InputFieldComponent
                  label="Amount"
                  value={value?.toString() || ""}
                  placeholder="Enter amount to be sent"
                  inputClassName={DEFAULT_INPUT_CLASSNAME}
                  onChangeText={(text) => onChange(Number(text || 0) || 0)}
                  error={error?.message}
                  keyboardType="number-pad"
                  inputMode="numeric"
                />
                <TextComponent className="text-red-500 text-sm">
                  This transfer will attract a charge or N
                </TextComponent>
                <View className="flex flex-row items-center gap-4">
                  {AMOUNTS.map((amount) => (
                    <TouchableOpacity
                      onPress={() => onChange(amount)}
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
            )}
          />
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <SelectFieldComponent
                label="Category"
                listContainerClassName="max-h-[65vh]"
                options={new Array(6).fill(0).map((_, index) => ({
                  label: `Category ${index + 1}`,
                  value: `category-${index + 1}`,
                }))}
                onChange={(option) => onChange(option?.value)}
                value={value || ""}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="remark"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputFieldComponent
                label="Remark"
                placeholder="Remarks (e.g Shopping)"
                inputClassName={DEFAULT_INPUT_CLASSNAME}
                onChangeText={(text) => onChange(text)}
                value={value || ""}
                error={error?.message}
              />
            )}
          />
          <ButtonComponent
            onPress={onSubmit}
            disabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Continue"}
          </ButtonComponent>
        </ScrollView>
      </KeyboardViewLayout>
    </ContainerComponent>
  );
};

export default memo(SendMoneyScreen);

const styles = StyleSheet.create({});
