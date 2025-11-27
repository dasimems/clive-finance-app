import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Image } from "expo-image";

import CustomImage from "./custom-image.component";

describe("<CustomImage />", () => {
  test("renders placeholder until load completes", () => {
    const handleLoadEnd = jest.fn();
    const { UNSAFE_getAllByType } = render(
      <CustomImage
        source={{ uri: "https://example.com/photo.png" }}
        onLoadEnd={handleLoadEnd}
      />
    );

    expect(UNSAFE_getAllByType(Image)).toHaveLength(2);

    const [primaryImageBefore] = UNSAFE_getAllByType(Image);
    fireEvent(primaryImageBefore, "onLoadEnd");

    expect(handleLoadEnd).toHaveBeenCalled();
    expect(UNSAFE_getAllByType(Image)).toHaveLength(1);
  });

  test("keeps fallback image visible when load fails", () => {
    const handleError = jest.fn();
    const { UNSAFE_getAllByType } = render(
      <CustomImage
        source={{ uri: "https://example.com/photo.png" }}
        onError={handleError}
      />
    );

    const [primaryImageInitial] = UNSAFE_getAllByType(Image);
    fireEvent(primaryImageInitial, "onError", { nativeEvent: {} });

    expect(handleError).toHaveBeenCalled();

    const [primaryImageAfterError] = UNSAFE_getAllByType(Image);
    fireEvent(primaryImageAfterError, "onLoadEnd");

    expect(UNSAFE_getAllByType(Image)).toHaveLength(2);
  });
});
