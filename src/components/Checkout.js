import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import AddressInfo from "./AddressInfo";
import CreditCard from "./CreditCard";
import { Link } from "react-router-dom";

const basicTextInputReg = /^[A-Z]{1,30}$/i;
const addressReg = /^([a-zA-z0-9/\\''(),-\s]{5,100})$/i;
const zipReg = /^[0-9]{5}$/;
const phoneReg = /^[0-9]{10,}$/;
const ccReg = /^[0-9]{16}$/;
const dateReg = /^[0-9]{2}$/;
const cvcReg = /^[0-9]{3,4}$/;
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear().toString().slice(-2);

const Checkout = ({ shoppingCart }) => {
  const [billingAddressSame, setBillingAddressSame] = useState(true);
  const [previewOrder, setPreviewOrder] = useState(false);
  const [validateForm, setValidateForm] = useState(false);

  const [shippingFirstName, setShippingFirstName] = useState("");
  const [shippingLastName, setShippingLastName] = useState("");
  const [shippingCompanyName, setShippingCompanyName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingAddressNumber, setShippingAddressNumber] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingState, setShippingState] = useState("");
  const [shippingZip, setShippingZip] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingCompanyName, setBillingCompanyName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingAddressNumber, setBillingAddressNumber] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [billingPhone, setBillingPhone] = useState("");

  const [shippingFirstNameValid, setShippingFirstNameValid] = useState(false);
  const [shippingLastNameValid, setShippingLastNameValid] = useState(false);
  const [shippingAddressValid, setShippingAddressValid] = useState(false);
  const [shippingCityValid, setShippingCityValid] = useState(false);
  const [shippingStateValid, setShippingStateValid] = useState(false);
  const [shippingZipValid, setShippingZipValid] = useState(false);
  const [shippingPhoneValid, setShippingPhoneValid] = useState(false);
  const [billingFirstNameValid, setBillingFirstNameValid] = useState(false);
  const [billingLastNameValid, setBillingLastNameValid] = useState(false);
  const [billingAddressValid, setBillingAddressValid] = useState(false);
  const [billingCityValid, setBillingCityValid] = useState(false);
  const [billingStateValid, setBillingStateValid] = useState(false);
  const [billingZipValid, setBillingZipValid] = useState(false);
  const [billingPhoneValid, setBillingPhoneValid] = useState(false);

  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardExpiry, setCreditCardExpiry] = useState("");
  const [creditCardCVC, setCreditCardCVC] = useState("");

  const [creditCardNumberValid, setCreditCardNumberValid] = useState(false);
  const [creditCardExpiryValid, setCreditCardExpiryValid] = useState(false);
  const [creditCardCVCValid, setCreditCardCVCValid] = useState(false);

  useEffect(() => {
    const valid = basicTextInputReg.test(shippingFirstName);
    valid ? setShippingFirstNameValid(true) : setShippingFirstNameValid(false);
  }, [shippingFirstName]);

  useEffect(() => {
    const valid = basicTextInputReg.test(shippingLastName);
    valid ? setShippingLastNameValid(true) : setShippingLastNameValid(false);
  }, [shippingLastName]);

  useEffect(() => {
    const valid = addressReg.test(shippingAddress);
    valid ? setShippingAddressValid(true) : setShippingAddressValid(false);
  }, [shippingAddress]);

  useEffect(() => {
    const valid = basicTextInputReg.test(shippingCity);
    valid ? setShippingCityValid(true) : setShippingCityValid(false);
  }, [shippingCity]);

  useEffect(() => {
    const valid = basicTextInputReg.test(shippingState);
    valid ? setShippingStateValid(true) : setShippingStateValid(false);
  }, [shippingState]);

  useEffect(() => {
    const valid = zipReg.test(shippingZip);
    valid ? setShippingZipValid(true) : setShippingZipValid(false);
  }, [shippingZip]);

  useEffect(() => {
    const editedPhone = deleteSpacesAndSpecialCharacters(shippingPhone);
    const valid = phoneReg.test(editedPhone);
    valid ? setShippingPhoneValid(true) : setShippingPhoneValid(false);
  }, [shippingPhone]);

  useEffect(() => {
    const valid = basicTextInputReg.test(billingFirstName);
    valid ? setBillingFirstNameValid(true) : setBillingFirstNameValid(false);
  }, [billingFirstName]);

  useEffect(() => {
    const valid = basicTextInputReg.test(billingLastName);
    valid ? setBillingLastNameValid(true) : setBillingLastNameValid(false);
  }, [billingLastName]);

  useEffect(() => {
    const valid = addressReg.test(billingAddress);
    valid ? setBillingAddressValid(true) : setBillingAddressValid(false);
  }, [billingAddress]);

  useEffect(() => {
    const valid = basicTextInputReg.test(billingCity);
    valid ? setBillingCityValid(true) : setBillingCityValid(false);
  }, [billingCity]);

  useEffect(() => {
    const valid = basicTextInputReg.test(billingState);
    valid ? setBillingStateValid(true) : setBillingStateValid(false);
  }, [billingState]);

  useEffect(() => {
    const valid = zipReg.test(billingZip);
    valid ? setBillingZipValid(true) : setBillingZipValid(false);
  }, [billingZip]);

  useEffect(() => {
    const editedPhone = deleteSpacesAndSpecialCharacters(billingPhone);
    const valid = phoneReg.test(editedPhone);
    valid ? setBillingPhoneValid(true) : setBillingPhoneValid(false);
  }, [billingPhone]);

  useEffect(() => {
    const editedCC = deleteSpacesAndSpecialCharacters(creditCardNumber);
    const valid = ccReg.test(editedCC);
    valid ? setCreditCardNumberValid(true) : setCreditCardNumberValid(false);
  }, [creditCardNumber]);

  useEffect(() => {
    const month = creditCardExpiry.slice(0, 2);
    const year = creditCardExpiry.slice(-2);
    const monthValid = month < 13 && dateReg.test(month);
    const yearValid =
      year >= currentYear &&
      year <= parseInt(currentYear) + 6 &&
      dateReg.test(year);
    let currentYearCheck = true;
    if (year === currentYear && month < currentMonth) {
      currentYearCheck = false;
    }
    if (monthValid && yearValid && currentYearCheck) {
      setCreditCardExpiryValid(true);
      return;
    }
    setCreditCardExpiryValid(false);
  }, [creditCardExpiry]);

  useEffect(() => {
    console.log(creditCardCVC);
    const valid = cvcReg.test(creditCardCVC);
    valid ? setCreditCardCVCValid(true) : setCreditCardCVCValid(false);
  }, [creditCardCVC]);

  useEffect(() => {
    if (
      shippingFirstNameValid &&
      shippingLastNameValid &&
      shippingAddressValid &&
      shippingCityValid &&
      shippingStateValid &&
      shippingZipValid &&
      shippingPhoneValid &&
      creditCardNumberValid &&
      creditCardExpiryValid &&
      creditCardCVCValid
    ) {
      if (billingAddressSame) {
        setValidateForm(true);
        return;
      }
      if (
        billingFirstNameValid &&
        billingLastNameValid &&
        billingAddressValid &&
        billingCityValid &&
        billingStateValid &&
        billingZipValid &&
        billingPhoneValid
      ) {
        setValidateForm(true);
        return;
      }
    }
    setValidateForm(false);
  }, [
    billingAddressSame,
    shippingFirstNameValid,
    shippingLastNameValid,
    shippingAddressValid,
    shippingCityValid,
    shippingStateValid,
    shippingZipValid,
    shippingPhoneValid,
    creditCardNumberValid,
    creditCardExpiryValid,
    creditCardCVCValid,
    billingFirstNameValid,
    billingLastNameValid,
    billingAddressValid,
    billingCityValid,
    billingStateValid,
    billingZipValid,
    billingPhoneValid,
  ]);

  const handlePreviewOrder = (e) => {
    e.preventDefault();
    setPreviewOrder(!previewOrder);
  };

  const deleteSpacesAndSpecialCharacters = (input) => {
    return input.replace(/[\s-()]/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h1>checkout</h1>
        <form className='checkout-form' onSubmit={handleSubmit} noValidate>
          <div className='checkout-info-input-container'>
            <h2>Ship to</h2>
            <AddressInfo
              firstName={shippingFirstName}
              setFirstName={setShippingFirstName}
              firstNameValid={shippingFirstNameValid}
              lastName={shippingLastName}
              setLastName={setShippingLastName}
              lastNameValid={shippingLastNameValid}
              companyName={shippingCompanyName}
              setCompanyName={setShippingCompanyName}
              address={shippingAddress}
              setAddress={setShippingAddress}
              addressValid={shippingAddressValid}
              addressNumber={shippingAddressNumber}
              setAddressNumber={setShippingAddressNumber}
              city={shippingCity}
              setCity={setShippingCity}
              cityValid={shippingCityValid}
              state={shippingState}
              setState={setShippingState}
              stateValid={shippingStateValid}
              zip={shippingZip}
              setZip={setShippingZip}
              zipValid={shippingZipValid}
              phone={shippingPhone}
              setPhone={setShippingPhone}
              phoneValid={shippingPhoneValid}
            />
          </div>

          <div className='checkout-info-input-container'>
            <h2>Billing</h2>
            <CreditCard
              creditCardNumber={creditCardNumber}
              setCreditCardNumber={setCreditCardNumber}
              creditCardNumberValid={creditCardNumberValid}
              creditCardExpiry={creditCardExpiry}
              setCreditCardExpiry={setCreditCardExpiry}
              creditCardExpiryValid={creditCardExpiryValid}
              creditCardCVC={creditCardCVC}
              setCreditCardCVC={setCreditCardCVC}
              creditCardCVCValid={creditCardCVCValid}
            />
            <div className='billing-address-check'>
              <input
                type='checkbox'
                id='billing-shipping-address-same'
                name='billing-shipping-address-same'
                defaultChecked
                aria-label='billing address is the same as shipping address'
                onClick={() => setBillingAddressSame(!billingAddressSame)}
              />
              <label htmlFor='billing-shipping-address-same'>
                Billing address same as shipping address
              </label>
            </div>
            {!billingAddressSame && (
              <div>
                <h2>Billing Address</h2>
                <AddressInfo
                  firstName={billingFirstName}
                  setFirstName={setBillingFirstName}
                  firstNameValid={billingFirstNameValid}
                  lastName={billingLastName}
                  setLastName={setBillingLastName}
                  lastNameValid={billingLastNameValid}
                  companyName={billingCompanyName}
                  setCompanyName={setBillingCompanyName}
                  address={billingAddress}
                  setAddress={setBillingAddress}
                  addressValid={billingAddressValid}
                  addressNumber={billingAddressNumber}
                  setAddressNumber={setBillingAddressNumber}
                  city={billingCity}
                  setCity={setBillingCity}
                  cityValid={billingCityValid}
                  state={billingState}
                  setState={setBillingState}
                  stateValid={billingStateValid}
                  zip={billingZip}
                  setZip={setBillingZip}
                  zipValid={billingZipValid}
                  phone={billingPhone}
                  setPhone={setBillingPhone}
                  phoneValid={billingPhoneValid}
                />
              </div>
            )}
          </div>
          <div className='order-preview'>
            {!previewOrder && (
              <button
                className='preview-order-button'
                aria-label='open preview of your order'
                onClick={(e) => handlePreviewOrder(e)}
              >
                Preview your order
              </button>
            )}
            {previewOrder && (
              <div className='order-preview-container'>
                <div className='order-preview-items'>
                  {shoppingCart.map((item) => (
                    <div key={item.serial}>
                      <img src={item.imgSmall} alt={item.name} />
                      <div className='order-preview-info'>
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className='preview-order-close'
                  aria-label='close preview of your order'
                  onClick={(e) => handlePreviewOrder(e)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <Link to='/orderconfirmation'>
            <button
              className='place-order-button'
              type='submit'
              disabled={!validateForm}
            >
              Place Order
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
