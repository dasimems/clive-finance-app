import React from "react";
import { render } from "@testing-library/react-native";

import LabelComponent from "./label.component";

describe("<LabelComponent />", () => {
  test("renders provided label text", () => {
    const { getByText } = render(<LabelComponent label="Full name" />);

    expect(getByText("Full name")).toBeTruthy();
  });

  test("returns null when no label is provided", () => {
    const { toJSON } = render(<LabelComponent />);

    expect(toJSON()).toBeNull();
  });
});

