import React, { useEffect, useRef, useState } from "react";
import { validateInput } from "./CheckoutFormValidation";
import { ReducerActionType, StateType } from "./CheckoutFormReducer";

type PropsType = {
  formState: StateType;
  dispatch: React.Dispatch<ReducerActionType>;
};

const CreditCard = ({ dispatch, formState }: PropsType) => {
  const numberErrorRef = useRef<HTMLSpanElement>(null);
  const expiryErrorRef = useRef<HTMLSpanElement>(null);
  const cvcErrorRef = useRef<HTMLSpanElement>(null);

  const [cardNumberFocus, setCardNumberFocus] = useState(false);
  const [cardExpiryFocus, setCardExpiryFocus] = useState(false);
  const [cardCVCFocus, setCardCVCFocus] = useState(false);

  const handleCreditCardNum = (input: string) => {
    const regex = /^[0-9]+$/;
    const parsedInput = input.replace(/[\s]/g, "");
    if (regex.test(parsedInput) || input === "") {
      validateInput("creditCardNumber", parsedInput, dispatch);
    }
  };

  const spaceCCNum = (userInput: string) => {
    let ccNum = "";
    for (let i = 0; i < userInput.length; i++) {
      if (i % 4 === 0 && i > 0) ccNum = ccNum + " ";
      ccNum = ccNum + userInput[i];
    }
    return ccNum;
  };

  const handleCreditCardExpiry = (input: string) => {
    const regex = /^[0-9]+$/;
    const parsedInput = input.replace(/[/]/g, "");
    if (parsedInput === "" || regex.test(parsedInput)) {
      const formattedExpiry = formatExpiry(parsedInput);
      validateInput("creditCardExpiry", formattedExpiry, dispatch);
    }
  };

  const formatExpiry = (userInput: string) => {
    let expiry = "";
    for (let i = 0; i < userInput.length; i++) {
      if (i === 2) expiry = expiry + "/";
      expiry = expiry + userInput[i];
    }
    return expiry;
  };

  const handleCreditCardCVC = (input: string) => {
    const regex = /^[0-9]+$/;
    if (input === "" || regex.test(input)) {
      validateInput("creditCardCVC", input, dispatch);
    }
  };

  useEffect(() => {
    if (formState.creditCardNumber.hasError) numberErrorRef?.current?.focus();
  }, [formState.creditCardNumber.hasError]);

  useEffect(() => {
    if (formState.creditCardExpiry.hasError) expiryErrorRef?.current?.focus();
  }, [formState.creditCardExpiry.hasError]);

  useEffect(() => {
    if (formState.creditCardCVC.hasError) cvcErrorRef?.current?.focus();
  }, [formState.creditCardCVC.hasError]);

  return (
    <div className='w-full'>
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full md:w-[650px]'>
          <div className='relative h-[50px] overflow-hidden text-lg checkout-input-div'>
            <input
              type='text'
              name='creditCardNumber'
              autoComplete='off'
              value={spaceCCNum(formState.creditCardNumber.value)}
              onChange={(e) => handleCreditCardNum(e.target.value)}
              onFocus={() => setCardNumberFocus(true)}
              onBlur={() => setCardNumberFocus(false)}
              maxLength={19}
              aria-invalid={formState.creditCardNumber.hasError}
              aria-describedby='creditcard-number-note'
              aria-label='credit card number'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='creditCardNumber'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all ease duration-500 ${
                  formState.creditCardNumber.value.length || cardNumberFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Credit Card Number*
              </span>
            </label>
          </div>
          <span
            id='creditcard-number-note'
            className={
              formState.creditCardNumber.hasError
                ? "text-rose-600 font-semibold text-lg"
                : "absolute -left-[9999px]"
            }
            ref={numberErrorRef}
          >
            {formState.creditCardNumber.error}
          </span>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full md:w-[325px]'>
          <div className='relative h-[50px] overflow-hidden text-lg checkout-input-div'>
            <input
              type='text'
              name='creditCardExpiry'
              autoComplete='off'
              value={formState.creditCardExpiry.value}
              onChange={(e) => handleCreditCardExpiry(e.target.value)}
              onFocus={() => setCardExpiryFocus(true)}
              onBlur={() => setCardExpiryFocus(false)}
              maxLength={5}
              aria-invalid={formState.creditCardExpiry.hasError}
              aria-describedby='creditcard-expiry-note'
              aria-label='credit card expiry'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='creditCardExpiry'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all ease duration-500 ${
                  formState.creditCardExpiry.value.length || cardExpiryFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Valid Thru MM/YY*
              </span>
            </label>
          </div>
          <span
            id='creditcard-expiry-note'
            className={
              formState.creditCardExpiry.hasError
                ? "text-rose-600 font-semibold text-lg"
                : "absolute -left-[9999px]"
            }
            ref={expiryErrorRef}
          >
            {formState.creditCardExpiry.error}
          </span>
        </div>
        <div className='w-full md:w-[325px]'>
          <div className='relative h-[50px] overflow-hidden text-lg checkout-input-div'>
            <input
              type='text'
              name='creditCardCVC'
              autoComplete='off'
              value={formState.creditCardCVC.value}
              onChange={(e) => handleCreditCardCVC(e.target.value)}
              onFocus={() => setCardCVCFocus(true)}
              onBlur={() => setCardCVCFocus(false)}
              maxLength={4}
              aria-invalid={formState.creditCardCVC.hasError}
              aria-describedby='creditcard-cvc-note'
              aria-label='credit card cvc'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='creditCardCVC'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all ease duration-500 ${
                  formState.creditCardCVC.value.length || cardCVCFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                CVC*
              </span>
            </label>
          </div>
          <span
            id='creditcard-cvc-note'
            className={
              formState.creditCardCVC.hasError
                ? "text-rose-600 font-semibold text-lg"
                : "absolute -left-[9999px]"
            }
            ref={cvcErrorRef}
          >
            {formState.creditCardCVC.error}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
