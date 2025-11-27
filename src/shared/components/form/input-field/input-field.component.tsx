import {
  // InputAccessoryView,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useId,
} from "react";
// import { IS_IOS } from "../../../../utils/variables";
// import ButtonComponent from "../buttons/button.component";
import { cva } from "class-variance-authority";
// import { dismissKeyboard } from "../../../../utils/functions";
import clsx from "clsx";
import EyeOpenOutlineIcon from "@/assets/icons/eye-open-outline.icon";
import EyeSlashOutlineIcon from "@/assets/icons/eye-slash-outline.icon";
import LabelComponent from "../label/label.component";
import { cn } from "@/shared/utils/classnames";
import TextComponent from "../../text/text.component";

type TInputFieldProps = {
  label?: string;
  error?: string;
  inputClassName?: string;
  labelClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
  buttonClassName?: string;
  rightButtonAction?: () => void;
  leftButtonAction?: () => void;
} & TextInputProps;

const /* INPUT_ACCESSORY_VIEW_ID = "dismiss-keyboard-view", */
  BORDER_COLOR = "border-black/20 dark:border-white/20",
  BG_COLOR = "bg-transparent",
  BUTTON_WIDTH = "min-w-12 px-4",
  DEFAULT_BUTTON_CLASSNAME =
    "absolute flex-row h-full items-center justify-center",
  ICON_SIZE = 23,
  ICON_OPACITY = 0.7;

const generateClassName = cva(
  `flex-1 py-5 px-4 ${BG_COLOR} ${BORDER_COLOR} border rounded-md text-black placeholder:text-black/40 dark:text-white placeholder:dark:text-white/40`,
  {
    variants: {
      hasLeftIcon: {
        false: null,
        true: "pl-12",
      },
      hasRightIcon: {
        false: null,
        true: "pr-12",
      },
    },
  }
);

const InputField = forwardRef<
  React.ComponentRef<typeof TextInput>,
  TInputFieldProps
>(
  (
    {
      label,
      error,
      inputClassName,
      labelClassName,
      leftIcon,
      rightIcon: propRightIcon,
      leftButtonClassName,
      rightButtonClassName,
      buttonClassName,
      keyboardType,
      rightButtonAction: propRightButtonAction = () => {},
      leftButtonAction = () => {},
      placeholder,
      className,
      secureTextEntry: propSecureTextEntry,
      ...props
    },
    ref
  ) => {
    // const elementId = useId();
    const [secureTextEntry, setSecureTextEntry] = useState(
      propSecureTextEntry || false
    );

    const inputRef = useRef<TextInput>(null);
    useImperativeHandle(ref, () => inputRef.current as TextInput);

    const finalKeyboardType = useMemo(
      () => (propSecureTextEntry ? "visible-password" : keyboardType),
      [propSecureTextEntry, keyboardType]
    );

    const rightIcon = useMemo(() => {
      if (propSecureTextEntry) {
        if (secureTextEntry) {
          return <EyeOpenOutlineIcon size={ICON_SIZE} opacity={ICON_OPACITY} />;
        }

        return <EyeSlashOutlineIcon size={ICON_SIZE} opacity={ICON_OPACITY} />;
      }

      return propRightIcon;
    }, [propSecureTextEntry, secureTextEntry, propRightIcon]);

    const textInputClassName = useMemo(
      () =>
        cn(
          generateClassName({
            hasLeftIcon: !!leftIcon,
            hasRightIcon: !!rightIcon,
          }),
          inputClassName
        ),
      [rightIcon, leftIcon, inputClassName]
    );

    // const generatedInputViewId = useMemo(
    //   () => (IS_IOS ? `${elementId}-${INPUT_ACCESSORY_VIEW_ID}` : undefined),
    //   [elementId]
    // );

    const rightButtonAction = useCallback(() => {
      if (propSecureTextEntry) {
        return setSecureTextEntry((prevState) => !prevState);
      }
      return propRightButtonAction();
    }, [propRightButtonAction, propSecureTextEntry]);

    return (
      <View className={cn(clsx("flex flex-col w-full gap-3", className))}>
        <LabelComponent className={labelClassName} label={label} />
        <View className="relative flex flex-row items-stretch w-full">
          {leftIcon && (
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={leftButtonAction}
              className={cn(
                `${BUTTON_WIDTH} ${BG_COLOR} ${DEFAULT_BUTTON_CLASSNAME} rounded-l-md h-full`,
                "left-0",
                buttonClassName,
                leftButtonClassName
              )}
            >
              {leftIcon}
            </TouchableOpacity>
          )}
          <TextInput
            ref={inputRef}
            keyboardType={finalKeyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder || "Input here..."}
            className={textInputClassName}
            // {...(IS_IOS && { inputAccessoryViewID: generatedInputViewId })}
            {...props}
          />
          {rightIcon && (
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={rightButtonAction}
              className={cn(
                `${BUTTON_WIDTH} ${BG_COLOR} ${DEFAULT_BUTTON_CLASSNAME} rounded-r-md h-full`,
                buttonClassName,
                "right-0",
                rightButtonClassName
              )}
            >
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
        {/* {IS_IOS && (
          <InputAccessoryView nativeID={INPUT_ACCESSORY_VIEW_ID}>
            <View className="flex-row items-center justify-between px-5 py-3 bg-background">
              <View></View>
              <ButtonComponent
                onPress={dismissKeyboard}
                variant="transparent"
                className=""
              >
                <TextComponent className="text-white">Cancel</TextComponent>
              </ButtonComponent>
            </View>
          </InputAccessoryView>
        )} */}
        {error && (
          <TextComponent className="text-sm text-red-500">
            {error}
          </TextComponent>
        )}
      </View>
    );
  }
);

InputField.displayName = "Input field";

export default memo(InputField);
