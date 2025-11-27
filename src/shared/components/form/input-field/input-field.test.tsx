import React from "react";
import { TouchableOpacity } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";

import InputField from "./input-field.component";

describe("<InputField />", () => {
  test("renders provided label and default placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField label="Email" />
    );

    expect(getByText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Input here...")).toBeTruthy();
  });

  test("uses provided placeholder", () => {
    const { getByPlaceholderText } = render(
      <InputField placeholder="Enter email" />
    );

    expect(getByPlaceholderText("Enter email")).toBeTruthy();
  });

  test("toggles secure text entry when pressing the visibility button", () => {
    const { getByPlaceholderText, UNSAFE_getByType } = render(
      <InputField placeholder="Password" secureTextEntry />
    );

    const input = getByPlaceholderText("Password");
    expect(input.props.secureTextEntry).toBe(true);

    const toggleButton = UNSAFE_getByType(TouchableOpacity);
    fireEvent.press(toggleButton);

    const updatedInput = getByPlaceholderText("Password");
    expect(updatedInput.props.secureTextEntry).toBe(false);
  });

  test("renders error message when provided", () => {
    const { getByText } = render(<InputField error="Required field" />);

    expect(getByText("Required field")).toBeTruthy();
  });
});
