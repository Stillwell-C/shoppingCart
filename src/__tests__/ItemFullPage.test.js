import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ItemFullPage from "./ItemFullPage";

describe("ItemFullPage", () => {
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
      type: "clothing",
      img: "/img/item3.jpg",
      imgSmall: "/img/item3-small.jpg",
      serial: 3,
    },
  ];

  describe("page renders correctly", () => {
    it("renders header with correct name", () => {
      render(
        <MemoryRouter initialEntries={["/fullcollection/item2"]}>
          <Routes>
            <Route
              path='/fullcollection/:itemName'
              element={<ItemFullPage itemList={itemList} />}
            ></Route>
          </Routes>
        </MemoryRouter>
      );

      expect(
        screen.getByRole("heading", { name: /item2/i })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("heading", { name: /item1/i })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("heading", { name: /item3/i })
      ).not.toBeInTheDocument();
      expect(screen.getByAltText("item2")).toBeInTheDocument();
      expect(
        screen.getByText(/an item that is item number 2/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/L 200/i)).toBeInTheDocument();
    });

    it("does not render a page with header for an item that does not exist in the item list", () => {
      render(
        <MemoryRouter initialEntries={["/fullcollection/item4"]}>
          <Routes>
            <Route
              path='/fullcollection/:itemName'
              element={<ItemFullPage itemList={itemList} />}
            ></Route>
          </Routes>
        </MemoryRouter>
      );

      expect(
        screen.queryByRole("heading", { name: /item4/i })
      ).not.toBeInTheDocument();
    });
  });

  describe("adds items to the shopping cart", () => {
    it("calls function to add to an empty shopping cart", () => {
      const shoppingCart = [];
      const setShoppingCartMock = jest.fn();
      render(
        <MemoryRouter initialEntries={["/fullcollection/item2"]}>
          <Routes>
            <Route
              path='/fullcollection/:itemName'
              element={
                <ItemFullPage
                  itemList={itemList}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCartMock}
                />
              }
            ></Route>
          </Routes>
        </MemoryRouter>
      );
      userEvent.click(screen.getByRole("button", { name: /Add to cart/i }));
      expect(setShoppingCartMock).toHaveBeenCalledTimes(1);
    });

    it("calls function to add to a shopping cart with same item already inside", () => {
      const shoppingCart = [
        {
          name: "item2",
          quantity: 1,
          img: "/img/item2.jpg",
          imgSmall: "/img/item2-small.jpg",
        },
      ];
      const setShoppingCartMock = jest.fn();
      render(
        <MemoryRouter initialEntries={["/fullcollection/item2"]}>
          <Routes>
            <Route
              path='/fullcollection/:itemName'
              element={
                <ItemFullPage
                  itemList={itemList}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCartMock}
                />
              }
            ></Route>
          </Routes>
        </MemoryRouter>
      );
      userEvent.click(screen.getByRole("button", { name: /Add to cart/i }));
      expect(setShoppingCartMock).toHaveBeenCalledTimes(1);
    });
  });
});
