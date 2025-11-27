import { TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import clsx from "clsx";
import { cn } from "@/shared/utils/classnames";
import TextComponent from "../../text/text.component";
import ChevronLeftIcon from "@/assets/icons/chevron-left.icon";

type ScreenHeaderProp = {
  title: string;
  rightContent?: React.ReactNode;
  className?: string;
};

const ScreenHeader: React.FC<ScreenHeaderProp> = ({
  title,
  rightContent,
  className,
}) => {
  const { goBack } = useNavigation();
  return (
    <View className={cn(clsx("flex-row items-center w-full gap-5", className))}>
      <View className="w-full">
        <TouchableOpacity
          onPress={goBack}
          className="absolute left-0 -translate-y-1/2 top-1/2 z-[1]"
        >
          <ChevronLeftIcon size={24} />
        </TouchableOpacity>
        <View className="w-full">
          <TextComponent className="font-semibold text-center text-lg">
            {title}
          </TextComponent>
        </View>
        {rightContent && (
          <View className="absolute right-0 -translate-y-1/2 top-1/2 z-[1]">
            {rightContent}
          </View>
        )}
      </View>
    </View>
  );
};

export default memo(ScreenHeader);
