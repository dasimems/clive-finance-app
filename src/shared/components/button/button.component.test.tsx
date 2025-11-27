import { render } from "@testing-library/react-native";
import ButtonComponent from "./button.component";

describe("<ButtonComponent />", () => {
  test("ButtonComponent renders correctly", () => {
    const { getByText } = render(
      <ButtonComponent>Get Started</ButtonComponent>
    );

    expect(getByText("Get Started")).toBeTruthy();
  });
  test("ButtonComponent background color is primary", () => {
    const { getByRole } = render(
      <ButtonComponent testID="button" accessibilityRole="button">
        Get Started
      </ButtonComponent>
    );
    const button = getByRole("button");
  });
});
