import { TouchableOpacity, View } from "react-native";
import { memo } from "react";
import MoneySendIcon from "@/assets/icons/money-send.icon";
import PhoneIcon from "@/assets/icons/phone.icon";
import TextComponent from "@/shared/components/text/text.component";
import MessageQuestionIcon from "@/assets/icons/message-question.icon";
import PiggyBankIcon from "@/assets/icons/piggy-bank.icon";

const ActionPanelButton: React.FC<{
  icon: React.ReactNode;
  onPress: () => void;
  title: string;
}> = memo(({ icon, onPress, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={onPress}
      className="items-center gap-1"
    >
      <View className="size-12 bg-primary-100 rounded-full items-center justify-center">
        {icon}
      </View>
      <TextComponent className="text-xs text-white/60 text-center">
        {title}
      </TextComponent>
    </TouchableOpacity>
  );
});

ActionPanelButton.displayName = "ActionPanelButton";

const ICON_SIZE = 24,
  ICON_COLOR = "#042915";

const ActionPanelComponent = () => {
  return (
    <View className="bg-primary-900 p-5 rounded-lg flex-row items-center justify-between">
      <ActionPanelButton
        icon={<MoneySendIcon size={ICON_SIZE} color={ICON_COLOR} />}
        onPress={() => {}}
        title="Transfer"
      />
      <ActionPanelButton
        icon={<PhoneIcon size={ICON_SIZE} color={ICON_COLOR} />}
        onPress={() => {}}
        title="Buy data"
      />
      <ActionPanelButton
        icon={<MessageQuestionIcon size={ICON_SIZE} color={ICON_COLOR} />}
        onPress={() => {}}
        title="Help"
      />
      <ActionPanelButton
        icon={<PiggyBankIcon size={ICON_SIZE} color={ICON_COLOR} />}
        onPress={() => {}}
        title="Savings"
      />
    </View>
  );
};

export default memo(ActionPanelComponent);
