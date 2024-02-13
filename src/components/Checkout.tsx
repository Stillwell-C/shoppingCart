import React, { useEffect, useReducer, useRef, useState } from "react";
import Footer from "./Footer";
import AddressInfo from "./AddressInfo";
import CreditCard from "./CreditCard";
import { useNavigate } from "react-router-dom";
import { CheckoutReducer, initialState } from "./CheckoutFormReducer";
import { formCompletionCheck, validateForm } from "./CheckoutFormValidation";
import useCartContext from "../hooks/useCartContext";
import OrderPreview from "./OrderPreview";
import OrderProcessing from "./OrderProcessing";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../mutations/orderMutations";

type OrderInfo = {
  searchName: string;
  qty: number;
};

type UserInfo = {
  [key: string]: string;
};

export type Order = {
  userInfo: UserInfo;
  orderInfo: OrderInfo[];
};

const Checkout = () => {
  const navigate = useNavigate();
  const errRef = useRef<HTMLDivElement>(null);

  const [addOrder, { data, loading, error }] = useMutation(ADD_ORDER);

  useEffect(() => {
    if (error) console.log("error: ", JSON.stringify(error, null, 2));
    if (loading) console.log("loading: ", loading);
    if (data) console.log("data: ", data);
  }, [error, data, loading]);

  const {
    cart,
    itemTotal,
    priceTotal,
    stockCheck,
    dispatch: cartDispatch,
    REDUCER_ACTIONS,
  } = useCartContext();
  const [formState, dispatch] = useReducer(CheckoutReducer, initialState);

  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [previewOrder, setPreviewOrder] = useState(false);
  const [formCompletion, setFormCompletion] = useState(false);

  const outOfStockItem = stockCheck();

  useEffect(() => {
    if (outOfStockItem) {
      navigate("/cart");
    }
  }, [outOfStockItem]);

  useEffect(() => {
    setFormCompletion(formCompletionCheck(formState, sameBillingAddress));
  }, [formState, sameBillingAddress]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateForm(formState);
    const completion = formCompletionCheck(formState, sameBillingAddress);
    if (!validation || !completion) {
      return;
    }
    const orderInfo = cart.map((item) => ({
      searchName: item.searchName,
      qty: item.qty,
    }));
    const userInfoObj: UserInfo = {};
    const userInfoEntries = Object.entries(formState);
    for (const [key, values] of userInfoEntries) {
      userInfoObj[key] = values.value;
    }
    addOrder({
      variables: {
        userInfo: { sameBillingAddress, ...userInfoObj },
        orderInfo,
      },
    });
  };

  useEffect(() => {
    if (!error && !loading && data?.addOrder?.success) {
      cartDispatch({ type: REDUCER_ACTIONS.SUBMIT });
      navigate("/orderconfirmation", {
        state: { orderNumber: data?.addOrder?.orderNumber },
      });
    }
  }, [loading, data, error]);

  useEffect(() => {
    if (!loading && data?.addOrder?.error) {
      navigate("/cart", {
        state: {
          error: true,
          errorItem: data?.addOrder?.errorItem,
          errorMsg: data?.addOrder?.errorMsg,
        },
      });
    }
  }, [data, loading]);

  useEffect(() => {
    if (error) {
      errRef?.current?.focus();
      errRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [error]);

  const CheckoutPage = (
    <div className='checkout-page'>
      <div className='checkout-container'>
        <h1>checkout</h1>
        {error && (
          <div ref={errRef}>
            <p>An error occurred.</p>
            {error?.message && <p>{error.message}</p>}
            <p>Please try again</p>
          </div>
        )}
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
          <button
            className='place-order-button'
            type='submit'
            disabled={!formCompletion}
          >
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );

  return loading ? <OrderProcessing /> : CheckoutPage;
};

export default Checkout;
