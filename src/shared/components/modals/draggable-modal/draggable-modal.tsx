import { Modal, TouchableOpacity, View } from "react-native";
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import ModalLayout, { TModalLayoutProp } from "../modal-layout/modal.layout";
import clsx from "clsx";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { getComponentLayoutProperties } from "@utils/functions";
import Animated from "react-native-reanimated";
import { WINDOW_HEIGHT } from "@utils/variables";
import ContainerComponent from "../../container/container.component";
import { cn } from "@/shared/utils/classnames";

const DraggableModal = forwardRef<
  Modal,
  TModalLayoutProp & { contentContainerClassName?: string }
>(
  (
    {
      contentContainerClassName,
      visible = false,
      onClose = () => {},
      children,
      ...props
    },
    ref
  ) => {
    const [containerHeight, setViewHeight] = useState(0);
    const translateY = useSharedValue(containerHeight || WINDOW_HEIGHT);

    const closeModal = useCallback(() => {
      translateY.value = withTiming(containerHeight, { duration: 300 });
      setTimeout(() => {
        onClose();
      }, 300);
    }, [containerHeight]);

    const openModalAnimation = useCallback(() => {
      translateY.value = withTiming(0, { duration: 300 });
    }, []);
    const dragHandleGesture = Gesture.Pan()
      //   .simultaneousWithExternalGesture(Gesture.Tap())
      .activeOffsetY([-10, 10])
      .failOffsetX([-20, 20])
      .onChange((event) => {
        if (event.translationY > 0) {
          translateY.value = event.translationY;
        }
      })
      .onEnd((event) => {
        if (event.translationY > Math.min(containerHeight * 0.5, 150)) {
          runOnJS(closeModal)();
        } else {
          translateY.value = withSpring(0, { damping: 20 });
        }
      });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));

    useEffect(() => {
      if (visible) {
        openModalAnimation();
      }
      if (!visible) {
        translateY.value = withTiming(WINDOW_HEIGHT, { duration: 300 });
      }
    }, [visible]);
    return (
      <ModalLayout
        onClose={closeModal}
        animationType="fade"
        ref={ref}
        visible={visible}
        transparent
        {...props}
      >
        <ContainerComponent className="justify-end">
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => closeModal()}
            className="absolute inset-0 flex-1 bg-black opacity-50"
          />
          <Animated.View
            onLayout={(e) => {
              const { height } = getComponentLayoutProperties(e);
              setViewHeight(height);
            }}
            className={cn(
              clsx(
                "gap-4 bg-white rounded-t-3xl px-horizontal z-10",
                contentContainerClassName
              )
            )}
            style={[animatedStyle]}
          >
            <GestureDetector gesture={dragHandleGesture}>
              <View className="items-center w-full py-5">
                <TouchableOpacity className="w-full h-[0.3rem] rounded-full bg-black/50 dark:bg-white/30 max-w-[50px]" />
              </View>
            </GestureDetector>
            {children}
          </Animated.View>
        </ContainerComponent>
      </ModalLayout>
    );
  }
);

DraggableModal.displayName = "Modal layout";

export default memo(DraggableModal);
