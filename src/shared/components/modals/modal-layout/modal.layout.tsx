import { Modal, ModalProps } from "react-native";
import React, { forwardRef, memo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type TModalLayoutProp = {
  onClose: () => void;
} & ModalProps;

const ModalLayout = forwardRef<Modal, TModalLayoutProp>(
  (
    {
      onClose = () => {},
      onRequestClose,
      statusBarTranslucent = true,
      visible,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Modal
        onRequestClose={(e) => {
          if (onRequestClose) {
            onRequestClose(e);
          }
          onClose();
        }}
        statusBarTranslucent={statusBarTranslucent}
        ref={ref}
        visible={visible}
        {...props}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider className="flex-1">{children}</SafeAreaProvider>
        </GestureHandlerRootView>
      </Modal>
    );
  }
);

ModalLayout.displayName = "Modal layout";

export default memo(ModalLayout);
