import { render, screen } from "@testing-library/react";
import wait from "waait";
import CartCount from "../components/CartCount";

describe("<CartCount/>", () => {
  it("Renders", () => {
    render(<CartCount count={10} />);
  });
  it("Matches snapshot", () => {
    const { container } = render(<CartCount count={11} />);
    expect(container).toMatchSnapshot();
  });
  it("updates via props", async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);
    expect(container).toHaveTextContent("11");
    // Update the props
    rerender(<CartCount count="12" />);
    // First it concatenates two numbers (one shows up in top od the other in the page)
    expect(container).toHaveTextContent("1211");
    // wait for some ms, so the previous one dissapear
    await wait(400);
    expect(container).toHaveTextContent("12");
    expect(container).toMatchSnapshot();
  });
});
