import React from "react";

const CreditCard = ({
  creditCardNumber,
  setCreditCardNumber,
  creditCardNumberValid,
  creditCardExpiry,
  setCreditCardExpiry,
  creditCardExpiryValid,
  creditCardCVC,
  setCreditCardCVC,
  creditCardCVCValid,
}) => {
  const handleCreditCardNum = (e) => {
    const regex = /^[0-9]+$/;
    const input = e.target.value.replace(/[\s]/g, "");
    if (input === "" || regex.test(input)) {
      const spacedNumber = spaceCCNum(input);
      setCreditCardNumber(spacedNumber);
    }
  };

  const spaceCCNum = (userInput) => {
    let ccNum = "";
    for (let i = 0; i < userInput.length; i++) {
      if (i % 4 === 0 && i > 0) ccNum = ccNum + " ";
      ccNum = ccNum + userInput[i];
    }
    return ccNum;
  };

  const handleCreditCardExpiry = (e) => {
    const regex = /^[0-9]+$/;
    const input = e.target.value.replace(/[/]/g, "");
    if (input === "" || regex.test(input)) {
      const formattedExpiry = formatExpiry(input);
      setCreditCardExpiry(formattedExpiry);
    }
  };

  const formatExpiry = (userInput) => {
    let expiry = "";
    for (let i = 0; i < userInput.length; i++) {
      if (i === 2) expiry = expiry + "/";
      expiry = expiry + userInput[i];
    }
    return expiry;
  };

  const handleCreditCardCVC = (e) => {
    const regex = /^[0-9]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setCreditCardCVC(e.target.value);
    }
  };

  return (
    <div className='credit-card-input'>
      <div className='checkout-form-line'>
        <div className='input-div form-long'>
          <input
            type='text'
            name='creditCardNumber'
            autoComplete='off'
            value={creditCardNumber}
            onChange={(e) => handleCreditCardNum(e)}
            maxLength='19'
            aria-invalid={creditCardNumberValid ? "false" : "true"}
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
            creditCardNumberValid === false && creditCardNumber
              ? "error-msg"
              : "error-msg offscreen"
          }
        >
          Must input valid credit card number
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='creditCardExpiry'
            autoComplete='off'
            value={creditCardExpiry}
            onChange={(e) => handleCreditCardExpiry(e)}
            maxLength='5'
            aria-invalid={creditCardExpiryValid ? "false" : "true"}
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
            value={creditCardCVC}
            onChange={(e) => handleCreditCardCVC(e)}
            maxLength='4'
            aria-invalid={creditCardCVCValid ? "false" : "true"}
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
              creditCardExpiryValid === false && creditCardExpiry
                ? "error-msg"
                : "error-msg offscreen"
            }
          >
            Must input valid expiry date
          </span>
        </div>
        <span
          id='creditcard-cvc-note'
          className={
            creditCardCVCValid === false && creditCardCVC
              ? "error-msg"
              : "error-msg offscreen"
          }
        >
          Must input valid CVC
        </span>
      </div>
    </div>
  );
};

export default CreditCard;
