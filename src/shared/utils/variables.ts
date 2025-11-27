import { Dimensions, Platform } from "react-native";

export const IS_IOS = Platform.OS === "ios",
  WINDOW_WIDTH = Dimensions.get("window").width,
  WINDOW_HEIGHT = Dimensions.get("window").height,
  SCREEN_WIDTH = Dimensions.get("screen").width,
  SCREEN_HEIGHT = Dimensions.get("screen").height,
  OTP_LENGTH = 6;
