import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback, useState } from "react";
import DraggableModal from "@/shared/components/modals/draggable-modal/draggable-modal";
import ModalHeaderComponent, {
  EModalHeaderButtonState,
} from "./modal-header/modal-header.component";
import TextComponent from "@/shared/components/text/text.component";
import InputFieldComponent from "@/shared/components/form/input-field/input-field.component";
import ButtonComponent from "@/shared/components/button/button.component";
import DividerComponent from "@/shared/components/divider/divider.component";
import KeyboardViewLayout from "@/shared/components/keyboard-view/keyboard-view.layout";
import { useNavigation } from "@react-navigation/native";
import { UnauthenticatedStackParamList } from "@/navigations/unauthenticated-navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const INPUT_CLASSNAME = "rounded-full";

type TLoginForm = {
  email: string;
  password: string;
};

const schema = Joi.object<TLoginForm>({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email address",
    "string.required": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.required": "Password is required",
    "any.required": "Password is required",
  }),
});

const defaultValues: TLoginForm = {
  email: "",
  password: "",
};

const LoginModal: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<UnauthenticatedStackParamList, "otp">
    >();
  const [activeTab, setActiveTab] = useState<EModalHeaderButtonState>(
    EModalHeaderButtonState.PERSONAL
  );
  const handleOnLogin = useCallback(() => {
    onClose();
    navigate("otp");
  }, [onClose, navigate]);
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<TLoginForm>({
    defaultValues,
    resolver: joiResolver(schema),
    mode: "onChange",
  });
  return (
    <DraggableModal
      onClose={onClose}
      visible={visible}
      contentContainerClassName="gap-6 px-horizontal pb-10 max-h-[95vh]"
    >
      <ModalHeaderComponent activeState={activeTab} onPress={setActiveTab} />

      <KeyboardViewLayout>
        <ScrollView
          contentContainerClassName="gap-6"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <TextComponent className="text-2xl font-semibold">
            Login to your account
          </TextComponent>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputFieldComponent
                label="Email"
                inputClassName={INPUT_CLASSNAME}
                placeholder="Enter your email address"
                onChangeText={(text) => onChange(text)}
                value={value || ""}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputFieldComponent
                label="Password"
                inputClassName={INPUT_CLASSNAME}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={(text) => onChange(text)}
                value={value || ""}
                error={error?.message}
              />
            )}
          />
          <View className="flex-row justify-end">
            <TextComponent className="text-sm text-primary underline">
              Forgot password?
            </TextComponent>
          </View>
          <ButtonComponent
            onPress={handleSubmit(handleOnLogin)}
            disabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </ButtonComponent>
          <View className="flex-row items-center gap-3">
            <DividerComponent className="border-dashed" />
            <TextComponent className="text-sm opacity-60">
              Don't have an account?
            </TextComponent>
            <DividerComponent className="border-dashed" />
          </View>
          <ButtonComponent variant="outline">Create Account</ButtonComponent>

          <TouchableOpacity className="flex-row items-center justify-center mt-6">
            <TextComponent className="text-center opacity-60">
              Contact Support
            </TextComponent>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardViewLayout>
    </DraggableModal>
  );
};

export default memo(LoginModal);

const styles = StyleSheet.create({});
