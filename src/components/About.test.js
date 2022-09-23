import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

describe("About component", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  };
  it("renders correct heading", () => {
    setup();
    const topHeader = screen.getByText(/who are we/i);
    expect(topHeader).toBeInTheDocument();
  });

  it("renders paragraph text", () => {
    setup();
    const paratext = screen.getByText(
      /Elena grew her side project into a small fashion house/i
    );
    expect(paratext).toBeInTheDocument();
  });

  it("renders second header", () => {
    setup();
    const header = screen.getByText(/our creator/i);
    expect(header).toBeInTheDocument();
  });

  it("renders image of founder", () => {
    setup();
    const image = screen.getByAltText(/Elena Cojocaru/i);
    expect(image).toBeInTheDocument();
  });

  it("renders contact us image", () => {
    setup();
    const image = screen.getByAltText(/contact us/i);
    expect(image).toBeInTheDocument();
  });

  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
