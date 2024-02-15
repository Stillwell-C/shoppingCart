import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout";

describe("Checkout", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );
  };

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear().toString().slice(-2);
  //Gives a valid input for date field 1 month and 1 year ahead of current date
  const dateInput = `${currentMonth + 1}${parseInt(currentYear) + 1}`;

  describe("renders correct number of components from child components", () => {
    it("renders inputs from AddressInfo once by default", () => {
      setup();
      expect(getFirstNameInput()).toBeInTheDocument();
      expect(getLastNameInput()).toBeInTheDocument();
      expect(getCompanyNameInput()).toBeInTheDocument();
      expect(getAddressInput()).toBeInTheDocument();
      expect(getAddressExtraInfoInput()).toBeInTheDocument();
      expect(getCityInput()).toBeInTheDocument();
      expect(getCountryInput()).toBeInTheDocument();
      expect(getZipCodeInput()).toBeInTheDocument();
      expect(getPhoneInput()).toBeInTheDocument();
    });

    it("renders inputs from CrediCard", () => {
      setup();
      expect(getCreditCardNumberInput()).toBeInTheDocument();
      expect(getCreditCardExpiryInput()).toBeInTheDocument();
      expect(getCreditCardCVCInput()).toBeInTheDocument();
    });

    it("renders inputs from AddressInfo twice when billing address is the same as shipping address checkbox is unchecked", () => {
      setup();
      const shippingAddressCheckbox = screen.getByRole("checkbox", {
        name: /billing address is the same as shipping address/i,
      });
      userEvent.click(shippingAddressCheckbox);
      expect(
        screen.getAllByRole("textbox", { name: /first name/i }).length
      ).toBe(2);
      expect(
        screen.getAllByRole("textbox", { name: /last name/i }).length
      ).toBe(2);
      expect(
        screen.getAllByRole("textbox", { name: /company name/i }).length
      ).toBe(2);
      expect(screen.getAllByRole("textbox", { name: /address/i }).length).toBe(
        2
      );
      expect(
        screen.getAllByRole("textbox", { name: /apartment or suite number/i })
          .length
      ).toBe(2);
      expect(screen.getAllByRole("textbox", { name: /city/i }).length).toBe(2);
      expect(screen.getAllByRole("textbox", { name: /country/i }).length).toBe(
        2
      );
      expect(screen.getAllByRole("textbox", { name: /zip/i }).length).toBe(2);
      expect(
        screen.getAllByRole("textbox", { name: /phone number/i }).length
      ).toBe(2);
    });
  });

  //preview order
  describe("preview order button renders preview of order when shopping cart contains items", () => {
    const shoppingCart = [
      {
        name: "item 1",
        price: "100",
        quantity: 1,
        serial: 1,
        imgSmall: "item1.jpg",
      },
      {
        name: "item 2",
        price: "200",
        quantity: 2,
        serial: 2,
        imgSmall: "item2.jpg",
      },
      {
        name: "item 3",
        price: "300",
        quantity: 3,
        serial: 3,
        imgSmall: "item1.jpg",
      },
    ];
    const emptyShoppingCart = [];

    it("preview order button does not render any items if shopping cart is empty", () => {
      render(
        <BrowserRouter>
          <Checkout shoppingCart={emptyShoppingCart} />
        </BrowserRouter>
      );
      userEvent.click(
        screen.getByRole("button", { name: /open preview of your order/i })
      );
      expect(screen.queryByText(/quantity/i)).not.toBeInTheDocument();
    });

    it("preview order button renders close button even if no shopping cart is empty", () => {
      render(
        <BrowserRouter>
          <Checkout shoppingCart={emptyShoppingCart} />
        </BrowserRouter>
      );
      userEvent.click(
        screen.getByRole("button", { name: /open preview of your order/i })
      );
      expect(
        screen.getByRole("button", { name: /close preview of your order/i })
      ).toBeInTheDocument();
    });

    it("preview order button renders items if items are in the shopping cart", () => {
      render(
        <BrowserRouter>
          <Checkout shoppingCart={shoppingCart} />
        </BrowserRouter>
      );
      userEvent.click(
        screen.getByRole("button", { name: /open preview of your order/i })
      );
      expect(screen.getByText(/item 1/i)).toBeInTheDocument();
      expect(screen.getByText(/item 2/i)).toBeInTheDocument();
      expect(screen.getByText(/item 3/i)).toBeInTheDocument();
      expect(screen.getByText(/Quantity: 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Quantity: 2/i)).toBeInTheDocument();
      expect(screen.getByText(/Quantity: 3/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item 1/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item 2/i)).toBeInTheDocument();
      expect(screen.getByAltText(/item 3/i)).toBeInTheDocument();
    });

    it("preview order button renders close button if items are in the shopping cart", () => {
      render(
        <BrowserRouter>
          <Checkout shoppingCart={shoppingCart} />
        </BrowserRouter>
      );
      userEvent.click(
        screen.getByRole("button", { name: /open preview of your order/i })
      );
      expect(
        screen.getByRole("button", { name: /close preview of your order/i })
      ).toBeInTheDocument();
    });
  });

  describe("the order button is disabled unless all text fields have been validated", () => {
    it("place order button is disabled when text fields have no entries", () => {
      setup();
      expect(
        screen.getByRole("button", { name: /place order/i })
      ).toBeDisabled();
    });

    it("place order button is enabled when all text fields have valid inputs and only one address is showing", () => {
      setup();
      userEvent.type(getFirstNameInput(), "abc");
      userEvent.type(getLastNameInput(), "abc");
      userEvent.type(getCompanyNameInput(), "abc");
      userEvent.type(getAddressInput(), "123 abc st");
      userEvent.type(getAddressExtraInfoInput(), "abc");
      userEvent.type(getCityInput(), "abc");
      userEvent.type(getCountryInput(), "abc");
      userEvent.type(getZipCodeInput(), "12345");
      userEvent.type(getPhoneInput(), "1234567890");
      userEvent.type(getCreditCardNumberInput(), "1234567890123456");
      userEvent.type(getCreditCardExpiryInput(), dateInput);
      userEvent.type(getCreditCardCVCInput(), "123");
      expect(
        screen.getByRole("button", { name: /place order/i })
      ).toBeEnabled();
    });

    it("place order button is enabled when all text fields have valid inputs and both shipping and billing addresses are showing", () => {
      setup();
      userEvent.click(
        screen.getByRole("checkbox", {
          name: /billing address is the same as shipping address/i,
        })
      );
      const firstNames = screen.getAllByRole("textbox", {
        name: /first name/i,
      });
      const lastNames = screen.getAllByRole("textbox", { name: /last name/i });
      const companyNames = screen.getAllByRole("textbox", {
        name: /company name/i,
      });
      const addresses = screen.getAllByRole("textbox", { name: /address/i });
      const aptNumbers = screen.getAllByRole("textbox", {
        name: /apartment or suite number/i,
      });
      const cities = screen.getAllByRole("textbox", { name: /city/i });
      const countries = screen.getAllByRole("textbox", { name: /country/i });
      const zipCodes = screen.getAllByRole("textbox", { name: /zip/i });
      const phoneNumbers = screen.getAllByRole("textbox", {
        name: /phone number/i,
      });

      userEvent.type(firstNames[0], "abc");
      userEvent.type(lastNames[0], "abc");
      userEvent.type(companyNames[0], "abc");
      userEvent.type(addresses[0], "123 abc st");
      userEvent.type(aptNumbers[0], "abc");
      userEvent.type(cities[0], "abc");
      userEvent.type(countries[0], "abc");
      userEvent.type(zipCodes[0], "12345");
      userEvent.type(phoneNumbers[0], "1234567890");
      userEvent.type(getCreditCardNumberInput(), "1234567890123456");
      userEvent.type(getCreditCardExpiryInput(), dateInput);
      userEvent.type(getCreditCardCVCInput(), "123");
      userEvent.type(firstNames[1], "abc");
      userEvent.type(lastNames[1], "abc");
      userEvent.type(companyNames[1], "abc");
      userEvent.type(addresses[1], "123 abc st");
      userEvent.type(aptNumbers[1], "abc");
      userEvent.type(cities[1], "abc");
      userEvent.type(countries[1], "abc");
      userEvent.type(zipCodes[1], "12345");
      userEvent.type(phoneNumbers[1], "1234567890");

      expect(
        screen.getByRole("button", { name: /place order/i })
      ).toBeEnabled();
    });
  });

  describe("validation correctly adds class to display error messages and aria-invalid attribute when input is invald", () => {
    describe("invalid inputs render error messages without the offscreen class to display error messages and aria-invalid:true", () => {
      beforeEach(() => setup());
      it("first name displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getFirstNameInput(), "123");
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(getFirstNameInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg[0]).not.toHaveClass("offscreen");
      });

      it("last name displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getLastNameInput(), "123");
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(getLastNameInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg[1]).not.toHaveClass("offscreen");
      });

      it("address displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getAddressInput(), "123");
        const errorMsg = screen.getByText(/Must input a valid input address/i);
        expect(getAddressInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("city displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCityInput(), "123");
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(getCityInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("country displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCountryInput(), "123");
        const errorMsg = screen.getByText(/Must input a valid country/i);
        expect(getCountryInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("postal/zip code displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getZipCodeInput(), "123");
        const errorMsg = screen.getByText(/Must input valid postal\/zip code/i);
        expect(getZipCodeInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("phone displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getPhoneInput(), "123");
        const errorMsg = screen.getByText(/Must input valid phone number/i);
        expect(getPhoneInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("creditCardNumber displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCreditCardNumberInput(), "123");
        const errorMsg = screen.getByText(
          /Must input valid credit card number/i
        );
        expect(getCreditCardNumberInput()).toHaveAttribute(
          "aria-invalid",
          "true"
        );
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("creditCardExpiry displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCreditCardExpiryInput(), "123");
        const errorMsg = screen.getByText(/Must input valid expiry date/i);
        expect(getCreditCardExpiryInput()).toHaveAttribute(
          "aria-invalid",
          "true"
        );
        expect(errorMsg).not.toHaveClass("offscreen");
      });

      it("creditCardCVC displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCreditCardCVCInput(), "12");
        const errorMsg = screen.getByText(/Must input valid CVC/i);
        expect(getCreditCardCVCInput()).toHaveAttribute("aria-invalid", "true");
        expect(errorMsg).not.toHaveClass("offscreen");
      });
    });

    describe("valid inputs render error messages with the offscreen class to display error messages and aria-invalid:false", () => {
      beforeEach(() => setup());
      it("first name displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getFirstNameInput(), "abc");
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(getFirstNameInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg[0]).toHaveClass("offscreen");
      });

      it("last name displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getLastNameInput(), "abc");
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(getLastNameInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg[1]).toHaveClass("offscreen");
      });

      it("address displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getAddressInput(), "123 street name");
        const errorMsg = screen.getByText(/Must input a valid input address/i);
        expect(getAddressInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("city displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCityInput(), "abc");
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(getCityInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("country displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCountryInput(), "abc");
        const errorMsg = screen.getByText(/Must input a valid country/i);
        expect(getCountryInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("postal/zip code displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getZipCodeInput(), "12345");
        const errorMsg = screen.getByText(/Must input valid postal\/zip code/i);
        expect(getZipCodeInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("phone displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getPhoneInput(), "1234567890");
        const errorMsg = screen.getByText(/Must input valid phone number/i);
        expect(getPhoneInput()).toHaveAttribute("aria-invalid", "false");
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("creditCardNumber displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCreditCardNumberInput(), "1234567890123456");
        const errorMsg = screen.getByText(
          /Must input valid credit card number/i
        );
        expect(getCreditCardNumberInput()).toHaveAttribute(
          "aria-invalid",
          "false"
        );
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("creditCardExpiry displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCreditCardExpiryInput(), dateInput);
        const errorMsg = screen.getByText(/Must input valid expiry date/i);
        expect(getCreditCardExpiryInput()).toHaveAttribute(
          "aria-invalid",
          "false"
        );
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("creditCardCVC displays error and aria-invalid:true with invalid input", () => {
        userEvent.type(getCreditCardCVCInput(), "123");
        const errorMsg = screen.getByText(/Must input valid CVC/i);
        expect(getCreditCardCVCInput()).toHaveAttribute(
          "aria-invalid",
          "false"
        );
        expect(errorMsg).toHaveClass("offscreen");
      });
    });
  });
});

function getFirstNameInput() {
  return screen.getByRole("textbox", { name: /first name/i });
}

function getLastNameInput() {
  return screen.getByRole("textbox", { name: /last name/i });
}

function getCompanyNameInput() {
  return screen.getByRole("textbox", { name: /company name/i });
}

function getAddressInput() {
  return screen.getByRole("textbox", { name: /address/i });
}

function getAddressExtraInfoInput() {
  return screen.getByRole("textbox", { name: /apartment or suite number/i });
}

function getCityInput() {
  return screen.getByRole("textbox", { name: /city/i });
}

function getCountryInput() {
  return screen.getByRole("textbox", { name: /country/i });
}

function getZipCodeInput() {
  return screen.getByRole("textbox", { name: /zip/i });
}

function getPhoneInput() {
  return screen.getByRole("textbox", { name: /phone number/i });
}

function getCreditCardNumberInput() {
  return screen.getByRole("textbox", { name: /credit card number/i });
}
function getCreditCardExpiryInput() {
  return screen.getByRole("textbox", { name: /credit card expiry/i });
}
function getCreditCardCVCInput() {
  return screen.getByRole("textbox", { name: /credit card cvc/i });
}
