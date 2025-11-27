import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import DraggableModal from "@/shared/components/modals/draggable-modal/draggable-modal";
import ModalHeaderComponent, {
  EModalHeaderButtonState,
} from "./modal-header/modal-header.component";
import TextComponent from "@/shared/components/text/text.component";
import InputFieldComponent from "@/shared/components/form/input-field/input-field.component";
import ButtonComponent from "@/shared/components/button/button.component";
import DividerComponent from "@/shared/components/divider/divider.component";
import KeyboardViewLayout from "@/shared/components/keyboard-view/keyboard-view.layout";

const INPUT_CLASSNAME = "rounded-full";

const LoginModal: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<EModalHeaderButtonState>(
    EModalHeaderButtonState.PERSONAL
  );
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

          <InputFieldComponent
            label="Email"
            inputClassName={INPUT_CLASSNAME}
            placeholder="Enter your email address"
          />
          <InputFieldComponent
            label="Password"
            inputClassName={INPUT_CLASSNAME}
            placeholder="Enter your password"
            secureTextEntry
          />
          <View className="flex-row justify-end">
            <TextComponent className="text-sm text-primary underline">
              Forgot password?
            </TextComponent>
          </View>
          <ButtonComponent>Login</ButtonComponent>
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
