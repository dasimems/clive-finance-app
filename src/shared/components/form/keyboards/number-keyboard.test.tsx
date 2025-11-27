import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import NumberKeyboardComponent from "./number-keyboard.component";

describe("<NumberKeyboardComponent />", () => {
  test("appends tapped number to the current value", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <NumberKeyboardComponent value="12" onChange={handleChange} />
    );

    const zeroButton = getByLabelText("0");
    fireEvent.press(zeroButton);

    expect(handleChange).toHaveBeenCalledWith("120");
  });

  test("removes the last digit when delete is pressed", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <NumberKeyboardComponent value="987" onChange={handleChange} />
    );

    const deleteButton = getByLabelText("Del");
    fireEvent.press(deleteButton);

    expect(handleChange).toHaveBeenCalledWith("98");
  });
});
