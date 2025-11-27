import { LinearGradient } from "expo-linear-gradient";
import { Image as ExpoImage } from "expo-image";
import { cssInterop } from "nativewind";
import { FlashList } from "@shopify/flash-list";

cssInterop(ExpoImage, {
  className: {
    target: "style",
  },
});

cssInterop(LinearGradient, {
  className: {
    target: "style",
  },
});

cssInterop(FlashList, {
  className: {
    target: "style",
  },
  contentContainerClassName: {
    target: "contentContainerStyle",
  },
  listFooterComponentClassName: {
    target: "ListFooterComponentStyle",
  },
  listHeaderComponentClassName: {
    target: "ListHeaderComponentStyle",
  },
});
