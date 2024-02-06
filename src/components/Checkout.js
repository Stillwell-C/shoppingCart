import React, { useEffect, useReducer, useState } from "react";
import Footer from "./Footer";
import AddressInfo from "./AddressInfo";
import CreditCard from "./CreditCard";
import { Link } from "react-router-dom";
import { CheckoutReducer, initialState } from "./CheckoutFormReducer";
import { formCompletionCheck, validateForm } from "./CheckoutFormValidation";

const Checkout = ({ shoppingCart }) => {
  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [previewOrder, setPreviewOrder] = useState(false);
  const [formCompletion, setFormCompletion] = useState(false);

  const [formState, dispatch] = useReducer(CheckoutReducer, initialState);

  useEffect(() => {
    setFormCompletion(formCompletionCheck(formState, sameBillingAddress));
  }, [formState, sameBillingAddress]);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handlePreviewOrder = (e) => {
    e.preventDefault();
    setPreviewOrder(!previewOrder);
  };

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
