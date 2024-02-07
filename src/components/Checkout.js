import React, { useEffect, useReducer, useState } from "react";
import Footer from "./Footer";
import AddressInfo from "./AddressInfo";
import CreditCard from "./CreditCard";
import { Link } from "react-router-dom";
import { CheckoutReducer, initialState } from "./CheckoutFormReducer";
import { formCompletionCheck, validateForm } from "./CheckoutFormValidation";
import useCartContext from "../hooks/useCartContext";
import OrderPreview from "./OrderPreview";

const Checkout = () => {
  const { cart, itemTotal, priceTotal } = useCartContext();
  const [formState, dispatch] = useReducer(CheckoutReducer, initialState);

  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [previewOrder, setPreviewOrder] = useState(false);
  const [formCompletion, setFormCompletion] = useState(false);

  useEffect(() => {
    setFormCompletion(formCompletionCheck(formState, sameBillingAddress));
  }, [formState, sameBillingAddress]);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateForm(formState);
    if (!validation) return;
  };

  return (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h1>checkout</h1>
        <form className='checkout-form' onSubmit={handleSubmit} noValidate>
          <div className='checkout-info-input-container'>
            <h2>Ship to</h2>
            <AddressInfo
              formState={formState}
              dispatch={dispatch}
              addressType={"shipping"}
            />
          </div>

          <div className='checkout-info-input-container'>
            <h2>Billing</h2>
            <CreditCard formState={formState} dispatch={dispatch} />
            <div className='billing-address-check'>
              <input
                type='checkbox'
                id='billing-shipping-address-same'
                name='billing-shipping-address-same'
                defaultChecked
                aria-label='billing address is the same as shipping address'
                onClick={() => setSameBillingAddress(!sameBillingAddress)}
              />
              <label htmlFor='billing-shipping-address-same'>
                Billing address same as shipping address
              </label>
            </div>
            {!sameBillingAddress && (
              <div>
                <h2>Billing Address</h2>
                <AddressInfo
                  formState={formState}
                  dispatch={dispatch}
                  addressType={"billing"}
                />
              </div>
            )}
          </div>
          <div className='order-preview'>
            {previewOrder && (
              <OrderPreview
                cart={cart}
                itemTotal={itemTotal}
                priceTotal={priceTotal}
              />
            )}
            <button
              className='preview-order-button'
              aria-label='open preview of your order'
              onClick={() => {
                setPreviewOrder((prev) => !prev);
              }}
            >
              {previewOrder ? "Close" : "Preview your order"}
            </button>
          </div>
          <Link to='/orderconfirmation'>
            <button
              className='place-order-button'
              type='submit'
              disabled={!formCompletion}
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
