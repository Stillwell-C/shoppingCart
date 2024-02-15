import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

describe("Home", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };
  describe("renders links to other pages", () => {
    it("renders links to other pages of the application (includes footer links)", () => {
      setup();
      expect(screen.getAllByRole("link", { name: /Shop Now/i }).length).toBe(2);
      expect(
        screen.getAllByRole("link", { name: /Full Collection/i }).length
      ).toBe(2);
      expect(screen.getAllByRole("link", { name: /Clothing/i }).length).toBe(2);
      expect(screen.getAllByRole("link", { name: /Accessories/i }).length).toBe(
        2
      );
      expect(screen.getAllByRole("link", { name: /Interior/i }).length).toBe(3);
      expect(
        screen.getByRole("link", { name: /Shop interior/i })
      ).toBeInTheDocument();
    });
  });

  it("matches snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
