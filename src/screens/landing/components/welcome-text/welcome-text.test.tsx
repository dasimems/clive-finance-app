import { render } from "@testing-library/react-native";
import WelcomeTextComponent from "./welcome-text.component";

describe("<WelcomeText />", () => {
  test("Welcome to Zikora Bank", () => {
    const { getByText } = render(<WelcomeTextComponent />);

    expect(getByText("Welcome to Zikora Bank")).toBeTruthy();
  });
});
