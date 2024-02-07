import React, { useEffect, useRef } from "react";
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
    <div className='credit-card-input'>
      <div className='checkout-form-line'>
        <div className='input-div form-long'>
          <input
            type='text'
            name='creditCardNumber'
            autoComplete='off'
            value={spaceCCNum(formState.creditCardNumber.value)}
            onChange={(e) => handleCreditCardNum(e.target.value)}
            maxLength={19}
            aria-invalid={formState.creditCardNumber.hasError}
            aria-describedby='creditcard-number-note'
            aria-label='credit card number'
            required
          />
          <label className='label-name' htmlFor='creditCardNumber'>
            <span className='content-name'>Credit / Debit Card Number*</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <span
          id='creditcard-number-note'
          className={
            formState.creditCardNumber.hasError
              ? "error-msg"
              : "error-msg offscreen"
          }
          ref={numberErrorRef}
        >
          {formState.creditCardNumber.error}
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='creditCardExpiry'
            autoComplete='off'
            value={formState.creditCardExpiry.value}
            onChange={(e) => handleCreditCardExpiry(e.target.value)}
            maxLength={5}
            aria-invalid={formState.creditCardExpiry.hasError}
            aria-describedby='creditcard-expiry-note'
            aria-label='credit card expiry'
            required
          />
          <label className='label-name' htmlFor='creditCardExpiry'>
            <span className='content-name'>Valid Thru MM/YY*</span>
          </label>
        </div>
        <div className='input-div'>
          <input
            type='text'
            name='creditCardCVC'
            autoComplete='off'
            value={formState.creditCardCVC.value}
            onChange={(e) => handleCreditCardCVC(e.target.value)}
            maxLength={4}
            aria-invalid={formState.creditCardCVC.hasError}
            aria-describedby='creditcard-cvc-note'
            aria-label='credit card cvc'
            required
          />
          <label className='label-name' htmlFor='creditCardCVC'>
            <span className='content-name'>CVC*</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <div className='error-msg'>
          <span
            id='creditcard-expiry-note'
            className={
              formState.creditCardExpiry.hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
            ref={expiryErrorRef}
          >
            {formState.creditCardExpiry.error}
          </span>
        </div>
        <span
          id='creditcard-cvc-note'
          className={
            formState.creditCardCVC.hasError
              ? "error-msg"
              : "error-msg offscreen"
          }
          ref={cvcErrorRef}
        >
          {formState.creditCardCVC.error}
        </span>
      </div>
    </div>
  );
};

export default CreditCard;
