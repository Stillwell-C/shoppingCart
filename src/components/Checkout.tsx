import React, { useEffect, useReducer, useRef, useState } from "react";
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
      price: item.price,
    }));
    const userInfoObj: UserInfo = {};
    const userInfoEntries = Object.entries(formState);
    for (const [key, values] of userInfoEntries) {
      userInfoObj[key] = values.value;
    }
    const cartTotal = cart.reduce((previous, item) => {
      return previous + item.qty * item.price;
    }, 0);
    addOrder({
      variables: {
        userInfo: { sameBillingAddress, ...userInfoObj },
        orderInfo,
        orderTotal: cartTotal,
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
    <section className='mt-24 mb-32 mx-auto sm:w-[min(350px,90%)] w-4/5 xl:w-[1024px] min-h-screen flex justify-center'>
      <div className='flex flex-col items-center mt-10'>
        <h2 className='text-5xl'>checkout</h2>
        {error && (
          <div className='text-rose-600 font-semibold' ref={errRef}>
            <p>An error occurred.</p>
            {error?.message && <p>{error.message}</p>}
            <p>Please try again</p>
          </div>
        )}
        <form
          className='flex flex-col items-center gap-8'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='flex flex-col justify-center items-center md:items-start w-full gap-4'>
            <h3 className='text-2xl'>Ship to</h3>
            <AddressInfo
              formState={formState}
              dispatch={dispatch}
              addressType={"shipping"}
            />
          </div>

          <div className='flex flex-col justify-center items-center md:items-start w-full gap-4'>
            <h3 className='text-2xl'>Billing</h3>
            <CreditCard formState={formState} dispatch={dispatch} />
          </div>

          <div className='self-start'>
            <label htmlFor='billing-shipping-address-same'>
              <input
                type='checkbox'
                id='billing-shipping-address-same'
                name='billing-shipping-address-same'
                defaultChecked
                aria-label='billing address is the same as shipping address'
                onClick={() => setSameBillingAddress(!sameBillingAddress)}
              />
              <span>Billing address same as shipping address</span>
            </label>
          </div>

          {!sameBillingAddress && (
            <div className='flex flex-col justify-center items-center md:items-start w-full gap-4'>
              <h3 className='text-2xl'>Billing Address</h3>
              <AddressInfo
                formState={formState}
                dispatch={dispatch}
                addressType={"billing"}
              />
            </div>
          )}

          <div>
            {previewOrder && <OrderPreview cart={cart} />}
            <button
              className='grey-button'
              type='button'
              aria-label='open preview of your order'
              onClick={() => {
                setPreviewOrder((prev) => !prev);
              }}
            >
              {previewOrder ? "Close" : "Preview your order"}
            </button>
            <div className='mt-2'>
              <p>Total Items: {itemTotal}</p>
              <p className='font-semibold'>Total: {priceTotal}</p>
            </div>
          </div>
          <button
            className='grey-button py-3 px-8 rounded-lg'
            type='submit'
            disabled={!formCompletion}
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );

  return loading ? <OrderProcessing /> : CheckoutPage;
};

export default Checkout;
