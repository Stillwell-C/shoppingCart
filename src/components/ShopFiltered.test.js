import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ShopFiltered from "./ShopFiltered";

describe("shopFiltered", () => {
  const setup = (collectionName) => {
    render(
      <MemoryRouter initialEntries={[`/${collectionName}`]}>
        <Routes>
          <Route
            path='/:collectionName'
            element={<ShopFiltered itemList={itemList} />}
          ></Route>
        </Routes>
      </MemoryRouter>
    );
  };

  describe("clothing", () => {
    it("renders a page with title and links to other page for clothing", () => {
      setup("clothing");
      expect(
        screen.getByRole("heading", { name: "Clothing" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /link to full collection/i })
          .textContent
      ).toBe("Full Collection");
      expect(
        screen.getByRole("link", { name: /link to accessories page/i })
          .textContent
      ).toBe("Accessories");
      expect(
        screen.getByRole("link", { name: /link to interior page/i }).textContent
      ).toBe("Interior");
    });

    it("renders the correct number of items from the list", () => {
      setup("clothing");
      expect(screen.getAllByRole("link", { name: /item/i }).length).toBe(2);
    });

    it("item renders image, name, and price", () => {
      setup("clothing");
      expect(screen.getByAltText("item1")).toBeInTheDocument();
      expect(screen.getByText("item1")).toBeInTheDocument();
      expect(screen.getByText(/L 100/i)).toBeInTheDocument();
    });
  });

  describe("accessories", () => {
    it("renders a page with title and links to other page for clothing", () => {
      setup("accessories");
      expect(
        screen.getByRole("heading", { name: "Accessories" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /link to full collection/i })
          .textContent
      ).toBe("Full Collection");
      expect(
        screen.getByRole("link", { name: /link to clothing page/i }).textContent
      ).toBe("Clothing");
      expect(
        screen.getByRole("link", { name: /link to interior page/i }).textContent
      ).toBe("Interior");
    });

    it("renders the correct number of items from the list", () => {
      setup("accessories");
      expect(screen.getAllByRole("link", { name: /item/i }).length).toBe(2);
    });

    it("item renders image, name, and price", () => {
      setup("accessories");
      expect(screen.getByAltText("item3")).toBeInTheDocument();
      expect(screen.getByText("item3")).toBeInTheDocument();
      expect(screen.getByText(/L 300/i)).toBeInTheDocument();
    });
  });

  describe("interior", () => {
    it("renders a page with title and links to other page for clothing", () => {
      setup("interior");
      expect(
        screen.getByRole("heading", { name: "Interior" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /link to full collection/i })
          .textContent
      ).toBe("Full Collection");
      expect(
        screen.getByRole("link", { name: /link to clothing page/i }).textContent
      ).toBe("Clothing");
      expect(
        screen.getByRole("link", { name: /link to accessories page/i })
          .textContent
      ).toBe("Accessories");
    });

    it("renders the correct number of items from the list", () => {
      setup("interior");
      expect(screen.getAllByRole("link", { name: /item/i }).length).toBe(2);
    });

    it("item renders image, name, and price", () => {
      setup("interior");
      expect(screen.getByAltText("item5")).toBeInTheDocument();
      expect(screen.getByText("item5")).toBeInTheDocument();
      expect(screen.getByText(/L 500/i)).toBeInTheDocument();
    });
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
