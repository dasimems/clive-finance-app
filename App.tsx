import "@shared/style/global.css";
import "@utils/css-interop";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationWrapper from "@/navigations/navigation-wrapper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <NavigationWrapper />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
