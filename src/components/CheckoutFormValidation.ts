import {
  PropertyName,
  REDUCER_ACTION_TYPE,
  ReducerActionType,
} from "./CheckoutFormReducer";

const basicTextInputReg = /^[A-Z]{1,30}$/i;
const addressReg = /^([a-zA-z0-9/\\''(),-\s]{5,100})$/i;
const zipReg = /^[0-9]{5}$/;
const phoneReg = /^[0-9]{10,}$/;
const ccReg = /^[0-9]{16}$/;
const cvcReg = /^[0-9]{3,4}$/;
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentYear = parseInt(date.getFullYear().toString().slice(-2));

const deleteSpacesAndSpecialCharacters = (input: string) => {
  return input.replace(/[\s-()]/g, "");
};

export const validateInput = (
  propertyName: PropertyName,
  value: string,
  dispatch: React.Dispatch<ReducerActionType>
) => {
  let hasError = false;
  let error = "";

  switch (propertyName) {
    case "shippingFirstName" || "billingFirstName":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a first name";
      } else if (!basicTextInputReg.test(value)) {
        hasError = true;
        error = "Please input a valid first name";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingLastName" || "billingLastName":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a last name";
      } else if (!basicTextInputReg.test(value)) {
        hasError = true;
        error = "Please input a valid last name";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingCompanyName" || "billingCompanyName":
      if (value.length > 100) {
        hasError = true;
        error = "Please enter shorter name";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingAddress" || "billingAddress":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input an address";
      } else if (!addressReg.test(value)) {
        hasError = true;
        error = "Please input a valid address";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingCity" || "billingCity":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a city";
      } else if (!basicTextInputReg.test(value)) {
        hasError = true;
        error = "Please input a valid city";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingCountry" || "billingCountry":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a country";
      } else if (!basicTextInputReg.test(value)) {
        hasError = true;
        error = "Please input a valid country";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingZip" || "billingZip":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a zip";
      } else if (!zipReg.test(value)) {
        hasError = true;
        error = "Please input a valid zip";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "shippingPhone" || "billingPhone":
      value = deleteSpacesAndSpecialCharacters(value);
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a phone number";
      } else if (!phoneReg.test(value)) {
        hasError = true;
        error = "Please input a valid phone number";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "creditCardNumber":
      value = deleteSpacesAndSpecialCharacters(value);
      if (value.trim() === "") {
        hasError = true;
        error = "Please input a credit card number";
      } else if (!ccReg.test(value)) {
        hasError = true;
        error = "Please input a valid credit card number";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "creditCardExpiry":
      const month = parseInt(value.slice(0, 2));
      const year = parseInt(value.slice(-2));
      const monthValid = month < 13 && Number.isInteger(month);
      const yearValid =
        year >= currentYear &&
        year <= currentYear + 6 &&
        Number.isInteger(year);

      if (year === currentYear && month < currentMonth) {
        hasError = true;
        error = "Error. Expired card";
      } else if (!monthValid || !yearValid) {
        hasError = true;
        error = "Invalid date";
      } else {
        hasError = false;
        error = "";
      }

      break;

    case "creditCardCVC":
      if (value.trim() === "") {
        hasError = true;
        error = "Please input CVC";
      } else if (!cvcReg.test(value)) {
        hasError = true;
        error = "Please input a valid CVC number";
      } else {
        hasError = false;
        error = "";
      }
      break;

    default:
      break;
  }

  dispatch({
    type: REDUCER_ACTION_TYPE.UPDATE,
    payload: { propertyName, value, hasError, error },
  });
};
