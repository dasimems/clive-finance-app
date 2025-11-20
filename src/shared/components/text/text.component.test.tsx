import { render } from "@testing-library/react-native";
import TextComponent from "./text.component";

describe("<TextComponent />", () => {
  test("Children renders correctly", () => {
    const { getByText } = render(<TextComponent>Hello</TextComponent>);

    expect(getByText("Hello")).toBeTruthy();
  });
});
