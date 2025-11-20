import "@shared/style/global.css";
import "@utils/css-interop";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationWrapper from "@/navigations/navigation-wrapper";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationWrapper />
    </GestureHandlerRootView>
  );
}
