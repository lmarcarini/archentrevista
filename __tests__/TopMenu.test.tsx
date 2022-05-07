import { render, screen } from "@testing-library/react";
import TopMenu from "../components/TopMenu";
import "@testing-library/jest-dom";

describe("TopMenu", () => {
  it("should render a home button", () => {
    render(<TopMenu />);
    expect(screen.getByRole("link", { name: /logo/i })).toBeInTheDocument();
  });

  it("should render a dark theme button", () => {
    render(<TopMenu />);
    expect(
      screen.getByRole("button", { name: /Tema Escuro/i })
    ).toBeInTheDocument();
  });

  it("should render a shopping cart button", () => {
    render(<TopMenu />);
    expect(
      screen.getByRole("button", { name: /Carrinho de Compras/i })
    ).toBeInTheDocument();
  });

  it("should render a search bar", () => {
    render(<TopMenu />);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });
});
