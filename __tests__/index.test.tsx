import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render correctly", () => {
    render(<Home />);
    expect(screen.getByText("Teste")).toBeInTheDocument();
  });
});
