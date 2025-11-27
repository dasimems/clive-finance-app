import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";

import NumberKeyboardComponent from "./number-keyboard.component";

const findButtonByLabel = (buttons: TouchableOpacity[], label: string) => {
  return buttons.find((button) => button.props.children === label);
};

describe("<NumberKeyboardComponent />", () => {
  test("appends tapped number to the current value", () => {
    const handleChange = jest.fn();
    const { UNSAFE_getAllByType } = render(
      <NumberKeyboardComponent value="12" onChange={handleChange} />
    );

    const buttons = UNSAFE_getAllByType(TouchableOpacity);
    const zeroButton = findButtonByLabel(buttons, "0");
    expect(zeroButton).toBeDefined();

    fireEvent.press(zeroButton);

    expect(handleChange).toHaveBeenCalledWith("120");
  });

  test("removes the last digit when delete is pressed", () => {
    const handleChange = jest.fn();
    const { UNSAFE_getAllByType } = render(
      <NumberKeyboardComponent value="987" onChange={handleChange} />
    );

    const buttons = UNSAFE_getAllByType(TouchableOpacity);
    const deleteButton = findButtonByLabel(buttons, "Del");
    expect(deleteButton).toBeDefined();

    fireEvent.press(deleteButton);

    expect(handleChange).toHaveBeenCalledWith("98");
  });
});
