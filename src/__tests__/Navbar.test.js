import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const setup = () => {
    const shoppingCart = [];
    render(
      <BrowserRouter>
        <Navbar shoppingCart={shoppingCart} />
      </BrowserRouter>
    );
  };
  const setupWithShoppingCart = (shoppingCart) => {
    render(
      <BrowserRouter>
        <Navbar shoppingCart={shoppingCart} />
      </BrowserRouter>
    );
  };
  const setupWithMock = (shoppingCart, setShoppingCart) => {
    render(
      <BrowserRouter>
        <Navbar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      </BrowserRouter>
    );
  };

  describe("page links", () => {
    it("renders links to pages of the application", () => {
      setup();
      expect(
        screen.getByRole("link", { name: /link to home page/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /link to about page/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /link to shop/i })
      ).toBeInTheDocument();
    });
  });

  describe("renders a number next to the shopping bag icon indicating number of items in the shopping cart", () => {
    it("renders 0 when the shopping cart is empty", () => {
      setup();
      expect(screen.getByTestId("shoppingbag-quantity").textContent).toBe("0");
    });

    it("renders 1 when there is only one item with a quantity of 1 in the shopping cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      expect(screen.getByTestId("shoppingbag-quantity").textContent).toBe("1");
    });

    it("renders correct number when there is only one item with a quantity higher than 1 in the shopping cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 3,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      expect(screen.getByTestId("shoppingbag-quantity").textContent).toBe("3");
    });

    it("renders correct number when there are multiple items with a quantity of 1 in the shopping cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
        {
          name: "item2",
          quantity: 1,
          price: 200,
          img: "/img/item2.jpg",
          imgSmall: "/img/item2-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      expect(screen.getByTestId("shoppingbag-quantity").textContent).toBe("2");
    });

    it("renders correct number when there are multiple items with a quantity higher than 1 in the shopping cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 3,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
        {
          name: "item2",
          quantity: 2,
          price: 200,
          img: "/img/item2.jpg",
          imgSmall: "/img/item2-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      expect(screen.getByTestId("shoppingbag-quantity").textContent).toBe("5");
    });
  });

  describe("shopping cart dropdown menu", () => {
    const getShoppingCartButton = () => {
      return screen.getByRole("button", {
        name: /open shopping cart menu/i,
      });
    };

    it("renders button to open dropdown menu", () => {
      setup();
      expect(getShoppingCartButton()).toBeInTheDocument();
    });

    it("button renders dropdown menu when clicked", () => {
      setup();
      userEvent.click(getShoppingCartButton());
      expect(
        screen.getByRole("heading", { name: /shopping cart/i })
      ).toBeInTheDocument();
    });

    it("dropdown menu includes close button", () => {
      setup();
      userEvent.click(getShoppingCartButton());
      expect(
        screen.getByRole("button", { name: /close shopping cart menu/i })
      ).toBeInTheDocument();
    });

    it("renders empty cart text and link to shop when shopping cart is empty", () => {
      setup();
      userEvent.click(getShoppingCartButton());
      expect(screen.getByText(/Your cart is empty./i)).toBeInTheDocument();
      expect(
        screen.getAllByRole("link", { name: /link to shop page/i }).length
      ).toBe(2);
    });

    it("does not render empty cart text and link to shop when shopping cart has item", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      userEvent.click(getShoppingCartButton());
      expect(
        screen.queryByText(/Your cart is empty./i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryAllByRole("link", { name: /link to shop page/i }).length
      ).toBe(1);
    });

    it("renders a checkout button and total when shopping cart has item", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      userEvent.click(getShoppingCartButton());
      expect(
        screen.getByRole("link", { name: /link to checkout page/i })
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/total cost of items in cart/i).textContent
      ).toBe("Total: L 100");
    });

    it("menu correctly renders a single item in shopping cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      userEvent.click(getShoppingCartButton());
      expect(screen.getByText(/item1/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item1/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/item quantity/i).textContent).toBe("1");
    });

    it("menu correctly renders multiple items in cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 2,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
        {
          name: "item2",
          quantity: 3,
          price: 200,
          img: "/img/item2.jpg",
          imgSmall: "/img/item2-small.jpg",
        },
        {
          name: "item3",
          quantity: 6,
          price: 300,
          img: "/img/item3.jpg",
          imgSmall: "/img/item3-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      userEvent.click(getShoppingCartButton());
      const quantities = screen.getAllByLabelText(/item quantity/i);
      expect(screen.getByText(/item1/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item1/i)).toBeInTheDocument();
      expect(quantities[0].textContent).toBe("2");
      expect(screen.getByText(/item2/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item2/i)).toBeInTheDocument();
      expect(quantities[1].textContent).toBe("3");
      expect(screen.getByText(/item3/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item3/i)).toBeInTheDocument();
      expect(quantities[2].textContent).toBe("6");
    });

    it("menu correctly renders total quantity of multiple items in shopping cart", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 2,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
        {
          name: "item2",
          quantity: 3,
          price: 200,
          img: "/img/item2.jpg",
          imgSmall: "/img/item2-small.jpg",
        },
        {
          name: "item3",
          quantity: 6,
          price: 300,
          img: "/img/item3.jpg",
          imgSmall: "/img/item3-small.jpg",
        },
      ];
      setupWithShoppingCart(shoppingCart);
      userEvent.click(getShoppingCartButton());
      expect(
        screen.getByLabelText(/total cost of items in cart/i).textContent
      ).toBe("Total: L 2600");
    });

    it("calls setShoppingCart function when reduce quantity by 1 button is clicked if quantity of item is greater than 1", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 2,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      const mockSetShoppingCart = jest.fn();
      setupWithMock(shoppingCart, mockSetShoppingCart);
      userEvent.click(getShoppingCartButton());
      userEvent.click(
        screen.getByRole("button", { name: /reduce quantity by one/i })
      );
      expect(mockSetShoppingCart).toHaveBeenCalledTimes(1);
    });

    it("does call setShoppingCart function when reduce quantity by 1 button is clicked if quantity of item is not greater than one", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      const mockSetShoppingCart = jest.fn();
      setupWithMock(shoppingCart, mockSetShoppingCart);
      userEvent.click(getShoppingCartButton());
      userEvent.click(
        screen.getByRole("button", { name: /reduce quantity by one/i })
      );
      expect(mockSetShoppingCart).not.toHaveBeenCalled();
    });

    it("calls setShoppingCart function when increase quantity by 1 button is clicked", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      const mockSetShoppingCart = jest.fn();
      setupWithMock(shoppingCart, mockSetShoppingCart);
      userEvent.click(getShoppingCartButton());
      userEvent.click(
        screen.getByRole("button", { name: /increase quantity by one/i })
      );
      expect(mockSetShoppingCart).toHaveBeenCalledTimes(1);
    });

    it("calls setShoppingCart function when delete button is clicked", () => {
      const shoppingCart = [
        {
          name: "item1",
          quantity: 1,
          price: 100,
          img: "/img/item1.jpg",
          imgSmall: "/img/item1-small.jpg",
        },
      ];
      const mockSetShoppingCart = jest.fn();
      setupWithMock(shoppingCart, mockSetShoppingCart);
      userEvent.click(getShoppingCartButton());
      userEvent.click(
        screen.getByRole("button", { name: /delete item from shopping cart/i })
      );
      expect(mockSetShoppingCart).toHaveBeenCalledTimes(1);
    });
  });
});
