import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Shop from "../components/Shop";

describe("shop", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Shop itemList={itemList} />
      </BrowserRouter>
    );
  };

  it("renders page with title and links to other page", () => {
    setup();
    expect(
      screen.getByRole("heading", { name: /Full Collection/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /link to clothing page/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /link to accessories page/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /link to interior page/i })
    ).toBeInTheDocument();
  });

  it("renders items from the itemList", () => {
    setup();
    expect(screen.getAllByRole("link", { name: /item/i }).length).toBe(6);
  });

  it("item renders image, name, and price", () => {
    setup();
    expect(screen.getByAltText("item1")).toBeInTheDocument();
    expect(screen.getByText("item1")).toBeInTheDocument();
    expect(screen.getByText(/L 100/i)).toBeInTheDocument();
  });

  const itemList = [
    {
      name: "item1",
      price: 100,
      description: "an item that is item number 1",
      type: "clothing",
      img: "/img/item1.jpg",
      imgSmall: "/img/item1-small.jpg",
      serial: 1,
    },
    {
      name: "item2",
      price: 200,
      description: "an item that is item number 2",
      type: "clothing",
      img: "/img/item2.jpg",
      imgSmall: "/img/item2-small.jpg",
      serial: 2,
    },
    {
      name: "item3",
      price: 300,
      description: "an item that is item number 3",
      type: "accessories",
      img: "/img/item3.jpg",
      imgSmall: "/img/item3-small.jpg",
      serial: 3,
    },
    {
      name: "item4",
      price: 400,
      description: "an item that is item number 4",
      type: "accessories",
      img: "/img/item4.jpg",
      imgSmall: "/img/item4-small.jpg",
      serial: 4,
    },
    {
      name: "item5",
      price: 500,
      description: "an item that is item number 5",
      type: "interior",
      img: "/img/item5.jpg",
      imgSmall: "/img/item5-small.jpg",
      serial: 5,
    },
    {
      name: "item6",
      price: 600,
      description: "an item that is item number 6",
      type: "interior",
      img: "/img/item6.jpg",
      imgSmall: "/img/item6-small.jpg",
      serial: 6,
    },
  ];
});
