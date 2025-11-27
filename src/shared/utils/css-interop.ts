import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind";
import { FlashList } from "@shopify/flash-list";

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
