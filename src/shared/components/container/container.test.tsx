import { render } from "@testing-library/react-native";
import ContainerComponent from "./container.component";
import TextComponent from "../text/text.component";

describe("<Container />", () => {
  test("Children renders correctly", () => {
    const { getByText } = render(
      <ContainerComponent>
        <TextComponent>Hello</TextComponent>
      </ContainerComponent>
    );

    expect(getByText("Hello")).toBeTruthy();
  });
});
