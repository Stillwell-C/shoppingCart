import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  };
  it("renders links to other pages of the application", () => {
    setup();
    expect(screen.getByRole("link", { name: /About Us/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Full Collection/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Clothing/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Accessories/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Interior/i })).toBeInTheDocument();
  });

  it("renders an error message for invalid email input", () => {
    setup();
    userEvent.type(
      screen.getByRole("textbox", {
        name: /sign up for updates/i,
      }),
      "abc"
    );
    userEvent.click(screen.getByRole("button", { name: /sign up/i }));
    expect(
      screen.getByText(/Please input a valid email address./i)
    ).toBeInTheDocument();
  });

  it("renders a sucess message for valid email input", () => {
    setup();
    userEvent.type(
      screen.getByRole("textbox", {
        name: /sign up for updates/i,
      }),
      "email@email.com"
    );
    userEvent.click(screen.getByRole("button", { name: /sign up/i }));
    expect(screen.getByText(/Thank you for signing up!/i)).toBeInTheDocument();
  });

  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
