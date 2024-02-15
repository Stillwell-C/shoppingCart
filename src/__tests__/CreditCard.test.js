import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CreditCard from "../components/CreditCard";

describe("CreditCard", () => {
  describe("inputs display value supplied to input", () => {
    it("credit card number input displays state value", () => {
      const valueExample = "123";
      render(
        <BrowserRouter>
          <CreditCard creditCardNumber={valueExample} />
        </BrowserRouter>
      );
      expect(getCreditCardNumberInput()).toHaveDisplayValue(/123/);
    });

    it("credit card expiry input displays state value", () => {
      const valueExample = "123";
      render(
        <BrowserRouter>
          <CreditCard creditCardExpiry={valueExample} />
        </BrowserRouter>
      );
      expect(getCreditCardExpiryInput()).toHaveDisplayValue(/123/);
    });

    it("credit card cvc input displays state value", () => {
      const valueExample = "123";
      render(
        <BrowserRouter>
          <CreditCard creditCardCVC={valueExample} />
        </BrowserRouter>
      );
      expect(getCreditCardCVCInput()).toHaveDisplayValue(/123/);
    });
  });

  describe("input handler functions set states on change", () => {
    it("setCreditCardNumber is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardNumber={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardNumberInput(), "1234");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "1");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "12");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "123");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "1234");
    });
    it("setCreditCardExpiry is called when input is made to first name input and includes slash input by this function", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardExpiry={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardExpiryInput(), "1234");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "1");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "12");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "12/3");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "12/34");
    });
    it("setCreditCardCVC is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardCVC={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardCVCInput(), "1234");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "1");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "12");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "123");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "1234");
    });
  });

  describe("setCreditCardNumber correctly includes spaces every 4th digit", () => {
    it("setCreditCardNumber is called when input is made to first name input", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardNumber={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardNumberInput(), "1234567890123456");
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "1");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "12");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "123");
      expect(onChangeMock).toHaveBeenNthCalledWith(4, "1234");
      expect(onChangeMock).toHaveBeenNthCalledWith(5, "1234 5");
      expect(onChangeMock).toHaveBeenNthCalledWith(6, "1234 56");
      expect(onChangeMock).toHaveBeenNthCalledWith(7, "1234 567");
      expect(onChangeMock).toHaveBeenNthCalledWith(8, "1234 5678");
      expect(onChangeMock).toHaveBeenNthCalledWith(9, "1234 5678 9");
      expect(onChangeMock).toHaveBeenNthCalledWith(10, "1234 5678 90");
      expect(onChangeMock).toHaveBeenNthCalledWith(11, "1234 5678 901");
      expect(onChangeMock).toHaveBeenNthCalledWith(12, "1234 5678 9012");
      expect(onChangeMock).toHaveBeenNthCalledWith(13, "1234 5678 9012 3");
      expect(onChangeMock).toHaveBeenNthCalledWith(14, "1234 5678 9012 34");
      expect(onChangeMock).toHaveBeenNthCalledWith(15, "1234 5678 9012 345");
      expect(onChangeMock).toHaveBeenNthCalledWith(16, "1234 5678 9012 3456");
    });
  });

  describe("Inputs on accepting numbers will not call set state functions on change if letters are entered", () => {
    it("setCreditCardNumber is not called when input is made with letters", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardNumber={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardNumberInput(), "Test");
      expect(onChangeMock).not.toHaveBeenCalled();
    });
    it("setCreditCardExpiry is not called when input is made with letters", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardExpiry={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardExpiryInput(), "Test");
      expect(onChangeMock).not.toHaveBeenCalled();
    });
    it("setCreditCardCVC is not called when input is made with letters", () => {
      const onChangeMock = jest.fn();
      render(
        <BrowserRouter>
          <CreditCard setCreditCardCVC={onChangeMock} />
        </BrowserRouter>
      );
      userEvent.type(getCreditCardCVCInput(), "Test");
      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });

  describe("form input fields are rendered", () => {
    const setup = () => {
      render(
        <BrowserRouter>
          <CreditCard />
        </BrowserRouter>
      );
    };

    it("renders the credit card number input field", () => {
      setup();
      expect(getCreditCardNumberInput()).toBeInTheDocument();
    });
    it("renders the credit card expiry input field", () => {
      setup();
      expect(getCreditCardExpiryInput()).toBeInTheDocument();
    });
    it("renders the credit card cvc input field", () => {
      setup();
      expect(getCreditCardCVCInput()).toBeInTheDocument();
    });
  });

  describe("error messages", () => {
    describe("renders error messages", () => {
      const setup = () => {
        render(
          <BrowserRouter>
            <CreditCard />
          </BrowserRouter>
        );
      };
      it("renders error messages for credit card number input", () => {
        setup();
        const errorMsg = screen.getByText(
          /Must input valid credit card number/i
        );
        expect(errorMsg).toBeInTheDocument();
      });
      it("renders error messages for credit card expiry input", () => {
        setup();
        const errorMsg = screen.getByText(/Must input valid expiry date/i);
        expect(errorMsg).toBeInTheDocument();
      });
      it("renders error messages for credit card CVC input", () => {
        setup();
        const errorMsg = screen.getByText(/Must input valid CVC/i);
        expect(errorMsg).toBeInTheDocument();
      });
    });

    describe("adds proper class to display error messages when validation fails and input exists", () => {
      it("adds class to display error message for credit card number input", () => {
        render(
          <BrowserRouter>
            <CreditCard
              creditCardNumberValid={false}
              creditCardNumber={"123"}
            />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(
          /Must input valid credit card number/i
        );
        expect(errorMsg).toHaveClass("error-msg");
        expect(errorMsg).not.toHaveClass("offscreen");
      });
      it("adds class to display error message for credit card expiry input", () => {
        render(
          <BrowserRouter>
            <CreditCard
              creditCardExpiryValid={false}
              creditCardExpiry={"123"}
            />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid expiry date/i);
        expect(errorMsg).toHaveClass("error-msg");
        expect(errorMsg).not.toHaveClass("offscreen");
      });
      it("adds class to display error message for credit card cvc input", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardCVCValid={false} creditCardCVC={"123"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid CVC/i);
        expect(errorMsg).toHaveClass("error-msg");
        expect(errorMsg).not.toHaveClass("offscreen");
      });
    });

    describe("does not remove class to display error messages when validation is true and input exists", () => {
      it("adds class to not display error message for credit card number input", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardNumberValid={true} creditCardNumber={"123"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(
          /Must input valid credit card number/i
        );
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for credit card expiry input", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardExpiryValid={true} creditCardExpiry={"123"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid expiry date/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for credit card input cvc", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardCVCValid={true} creditCardCVC={"123"} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid CVC/i);
        expect(errorMsg).toHaveClass("offscreen");
      });
    });

    describe("does not remove class to display error messages when validation is false and input does not exist", () => {
      it("adds class to not display error message for credit card number input", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardNumberValid={false} creditCardNumber={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(
          /Must input valid credit card number/i
        );
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for credit card expiry input", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardExpiryValid={false} creditCardExpiry={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid expiry date/i);
        expect(errorMsg).toHaveClass("offscreen");
      });

      it("adds class to not display error message for credit card input cvc", () => {
        render(
          <BrowserRouter>
            <CreditCard creditCardCVCValid={false} creditCardCVC={""} />
          </BrowserRouter>
        );
        const errorMsg = screen.getByText(/Must input valid CVC/i);
        expect(errorMsg).toHaveClass("offscreen");
      });
    });
  });
});

function getCreditCardNumberInput() {
  return screen.getByRole("textbox", { name: /credit card number/i });
}
function getCreditCardExpiryInput() {
  return screen.getByRole("textbox", { name: /credit card expiry/i });
}
function getCreditCardCVCInput() {
  return screen.getByRole("textbox", { name: /credit card cvc/i });
}
