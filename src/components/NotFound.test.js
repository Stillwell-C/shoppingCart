import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("displays text on initial page load", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /Error. Could not find page./i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Redirecting.../i })
    ).toBeInTheDocument();
  });
});
