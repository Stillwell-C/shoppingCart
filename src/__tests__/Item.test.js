import React from "react";
import { getByAltText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Item from "../components/Item";

describe("Item", () => {
  it("renders information correctly when props are recieved", () => {
    render(
      <BrowserRouter>
        <Item itemName='Item 1' itemImgSmal='item1.img' itemPrice='100' />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("L 100")).toBeInTheDocument();
  });
});
