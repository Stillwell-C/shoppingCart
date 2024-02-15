import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router";
import OrderConfirmation from "./OrderConfirmation";

describe("NotFound", () => {
  it("displays text on initial page load", () => {
    render(
      <BrowserRouter>
        <OrderConfirmation />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /Success!/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Your order has been recieved./i })
    ).toBeInTheDocument();
  });
});
