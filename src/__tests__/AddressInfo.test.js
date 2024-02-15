import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import AddressInfo from "./AddressInfo";

describe("AddressInfo", () => {
  describe("inputs display value supplied to input", () => {
    it("first name input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo firstName={valueExample} />
        </BrowserRouter>
      );
      expect(getFirstNameInput()).toHaveDisplayValue(/abc/i);
    });

    it("last name input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo lastName={valueExample} />
        </BrowserRouter>
      );
      expect(getLastNameInput()).toHaveDisplayValue(/abc/i);
    });

    it("company name input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo companyName={valueExample} />
        </BrowserRouter>
      );
      expect(getCompanyNameInput()).toHaveDisplayValue(/abc/i);
    });

    it("address input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo address={valueExample} />
        </BrowserRouter>
      );
      expect(getAddressInput()).toHaveDisplayValue(/abc/i);
    });

    it("address extra info input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo addressNumber={valueExample} />
        </BrowserRouter>
      );
      expect(getAddressExtraInfoInput()).toHaveDisplayValue(/abc/i);
    });

    it("city input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo city={valueExample} />
        </BrowserRouter>
      );
      expect(getCityInput()).toHaveDisplayValue(/abc/i);
    });

    it("country input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo state={valueExample} />
        </BrowserRouter>
      );
      expect(getCountryInput()).toHaveDisplayValue(/abc/i);
    });

    it("zip input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo zip={valueExample} />
        </BrowserRouter>
      );
      expect(getZipCodeInput()).toHaveDisplayValue(/abc/i);
    });

    it("phone input displays state value", () => {
      const valueExample = "abc";
      render(
        <BrowserRouter>
          <AddressInfo phone={valueExample} />
        </BrowserRouter>
      );
      expect(getPhoneInput()).toHaveDisplayValue(/abc/i);
    });
  });

  describe("input call handler functions set states on change", () => {
    it("setFirstName is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setFirstName={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getFirstNameInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setLastName is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setLastName={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getLastNameInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setCompanyName is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setCompanyName={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCompanyNameInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setAddress is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setAddress={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getAddressInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setAddressNumber is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setAddressNumber={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getAddressExtraInfoInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setCity is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setCity={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCityInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setState is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setState={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCountryInput(), "Test");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "T");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "Te");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "Tes");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "Test");
    });

    it("setZip is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setZip={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getZipCodeInput(), "1234");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "1");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "12");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "123");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "1234");
    });

    it("setPhone is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setPhone={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getPhoneInput(), "1234");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "1");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "12");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "123");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "1234");
    });
  });

  describe("Inputs on accepting numbers will not call set state functions on change", () => {
    it("setZip is not called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setZip={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getZipCodeInput(), "Test");
      expect(onChangeMock).not.toHaveBeenCalled();
    });

    it("setPhone is not called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <AddressInfo setPhone={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getPhoneInput(), "Test");
      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });

  describe("form input fields are rendered", () => {
    const setup = () => {
      render(
        <BrowserRouter>
          <AddressInfo />
        </BrowserRouter>
      );
    };

    it("renders the first name input field", () => {
      setup();
      expect(getFirstNameInput()).toBeInTheDocument();
    });

    it("renders the last name input field", () => {
      setup();
      expect(getLastNameInput()).toBeInTheDocument();
    });

    it("renders the company name input field", () => {
      setup();
      expect(getCompanyNameInput()).toBeInTheDocument();
    });

    it("renders the address input field", () => {
      setup();
      expect(getAddressInput()).toBeInTheDocument();
    });

    it("renders the address extra info input field", () => {
      setup();
      expect(getAddressExtraInfoInput()).toBeInTheDocument();
    });

    it("renders the city input field", () => {
      setup();
      expect(getCityInput()).toBeInTheDocument();
    });

    it("renders the country field", () => {
      setup();
      expect(getCountryInput()).toBeInTheDocument();
    });

    it("renders the zip code field", () => {
      setup();
      expect(getZipCodeInput()).toBeInTheDocument();
    });

    it("renders the phone number field", () => {
      setup();
      expect(getPhoneInput()).toBeInTheDocument();
    });
  });

  describe("error messages", () => {
    describe("renders error messages", () => {
      const setup = () => {
        render(
          <BrowserRouter>
            <AddressInfo />
          </BrowserRouter>
        );
      };
      it("renders error messages for first name and last name inputs", () => {
        setup();
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(errorMsg.length).toBe(2);
      });

      it("renders error message for address input", () => {
        setup();
        const errorMsg = screen.getByText(/Must input a valid input address/i);
        expect(errorMsg).toBeInTheDocument();
      });

      it("renders error message for city input", () => {
        setup();
        const errorMsg = screen.getByText(/must input a valid city/i);
        expect(errorMsg).toBeInTheDocument();
      });

      it("renders error message for country input", () => {
        setup();
        const errorMsg = screen.getByText(/must input a valid country/i);
        expect(errorMsg).toBeInTheDocument();
      });

      it("renders error message for zip code input", () => {
        setup();
        const errorMsg = screen.getByText(/must input valid postal\/zip code/i);
        expect(errorMsg).toBeInTheDocument();
      });

      it("renders error message for phone number input", () => {
        setup();
        const errorMsg = screen.getByText(/must input valid phone number/i);
        expect(errorMsg).toBeInTheDocument();
      });
    });

    describe("adds proper class to display error messages when validation fails and input exists", () => {
      it("adds class to display error messages for first name and last name inputs", () => {
        render(
          <BrowserRouter>
            <AddressInfo
              firstNameValid={false}
              firstName={"abc"}
              lastNameValid={false}
              lastName={"abc"}
            />
          </BrowserRouter>
        );
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(errorMsg[0]).toHaveClass("error-msg");
        expect(errorMsg[1]).toHaveClass("error-msg");
      });

      it("adds class to display error message for address input", () => {
        render(
          <BrowserRouter>
            <AddressInfo addressValid={false} address={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid input address/i);
        expect(errorMsg).toHaveClass("error-msg");
      });

      it("adds class to display error message for city input", () => {
        render(
          <BrowserRouter>
            <AddressInfo cityValid={false} city={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(errorMsg).toHaveClass("error-msg");
      });

      it("adds class to display error message for country input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={false} state={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(errorMsg).toHaveClass("error-msg");
      });

      it("adds class to display error message for postal/zip code input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={false} state={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid postal\/zip code/i);
        expect(errorMsg).toHaveClass("error-msg");
      });

      it("adds class to display error message for phone input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={false} state={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid phone number/i);
        expect(errorMsg).toHaveClass("error-msg");
      });
    });

    describe("does not remove class to display error messages when validation is true and input exists", () => {
      it("adds class to not display error messages for first name and last name inputs", () => {
        render(
          <BrowserRouter>
            <AddressInfo
              firstNameValid={true}
              firstName={"abc"}
              lastNameValid={true}
              lastName={"abc"}
            />
          </BrowserRouter>
        );
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(errorMsg[0]).toHaveClass("offscreen");
        expect(errorMsg[1]).toHaveClass("offscreen");
      });

      it("adds class to not display error message for address input", () => {
        render(
          <BrowserRouter>
            <AddressInfo addressValid={true} address={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid input address/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for city input", () => {
        render(
          <BrowserRouter>
            <AddressInfo cityValid={true} city={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for country input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={true} state={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for postal/zip code input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={true} state={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid postal\/zip code/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for phone input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={true} state={"abc"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid phone number/i);
        expect(errorMsg).toHaveClass("offscreen");
      });
    });

    describe("does not remove class to display error messages when validation is false and input does not exist", () => {
      it("adds class to not display error messages for first name and last name inputs", () => {
        render(
          <BrowserRouter>
            <AddressInfo
              firstNameValid={false}
              firstName={""}
              lastNameValid={false}
              lastName={""}
            />
          </BrowserRouter>
        );
        const errorMsg = screen.getAllByText(
          /must input valid name between 1-30 characters/i
        );
        expect(errorMsg[0]).toHaveClass("offscreen");
        expect(errorMsg[1]).toHaveClass("offscreen");
      });

      it("adds class to not display error message for address input", () => {
        render(
          <BrowserRouter>
            <AddressInfo addressValid={false} address={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid input address/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for city input", () => {
        render(
          <BrowserRouter>
            <AddressInfo cityValid={false} city={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for country input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={false} state={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input a valid city/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for postal/zip code input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={false} state={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid postal\/zip code/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for phone input", () => {
        render(
          <BrowserRouter>
            <AddressInfo stateValid={false} state={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid phone number/i);
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
