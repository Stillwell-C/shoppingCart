import React from "react";
import { validateInput } from "./CheckoutFormValidation";

const AddressInfo = ({ formState, dispatch, addressType }) => {
  const handleFirstName = (input) => {
    const name = `${addressType}FirstName`;
    validateInput(name, input, dispatch);
  };
  const handleLastName = (input) => {
    const name = `${addressType}LastName`;
    validateInput(name, input, dispatch);
  };
  const handleCompanyName = (input) => {
    const name = `${addressType}CompanyName`;
    validateInput(name, input, dispatch);
  };
  const handleAddress = (input) => {
    const name = `${addressType}Address`;
    validateInput(name, input, dispatch);
  };
  const handleAddressNumber = (input) => {
    const name = `${addressType}AddressNumber`;
    validateInput(name, input, dispatch);
  };
  const handleCity = (input) => {
    const name = `${addressType}City`;
    validateInput(name, input, dispatch);
  };
  const handleCountry = (input) => {
    const name = `${addressType}Country`;
    validateInput(name, input, dispatch);
  };
  const handleZip = (input) => {
    const regex = /^[0-9]+$/;
    const name = `${addressType}Zip`;

    if (input === "" || regex.test(input)) {
      validateInput(name, input, dispatch);
    }
  };
  const handlePhone = (input) => {
    const regex = /^[0-9- ()+]+$/;
    const name = `${addressType}Phone`;

    if (input === "" || regex.test(input)) {
      validateInput(name, input, dispatch);
    }
  };

  return (
    <>
      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='firstname'
            autoComplete='off'
            value={formState[`${addressType}FirstName`].value}
            onChange={(e) => handleFirstName(e.target.value)}
            maxLength='30'
            aria-invalid={formState[`${addressType}FirstName`].hasError}
            aria-describedby='firstname-note'
            aria-label='first name'
            required
          />
          <label className='label-name' htmlFor='firstname'>
            <span className='content-name'>First Name*</span>
          </label>
        </div>
        <div className='input-div'>
          <input
            type='text'
            name='lastname'
            autoComplete='off'
            value={formState[`${addressType}LastName`].value}
            onChange={(e) => handleLastName(e.target.value)}
            aria-invalid={formState[`${addressType}LastName`].hasError}
            aria-describedby='lastname-note'
            aria-label='last name'
            maxLength='30'
            required
          />
          <label className='label-name' htmlFor='lastname'>
            <span className='content-name'>Last Name*</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <div className='error-msg'>
          <span
            id='firstname-note'
            className={
              formState[`${addressType}FirstName`].hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
          >
            {formState[`${addressType}FirstName`].error}
          </span>
        </div>
        <span
          id='lastname-note'
          className={
            formState[`${addressType}LastName`].hasError
              ? "error-msg"
              : "error-msg offscreen"
          }
        >
          {formState[`${addressType}LastName`].error}
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-long'>
          <input
            type='text'
            name='company-name'
            autoComplete='off'
            value={formState[`${addressType}CompanyName`].value}
            onChange={(e) => handleCompanyName(e.target.value)}
            aria-label='company name'
            aria-invalid={formState[`${addressType}CompanyName`].hasError}
            aria-describedby='companyname-note'
            maxLength='50'
            required
          />
          <label className='label-name' htmlFor='company-name'>
            <span className='content-name'>Company Name</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <div className='error-msg'>
          <span
            id='companyname-note'
            className={
              formState[`${addressType}CompanyName`].hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
          >
            {formState[`${addressType}CompanyName`].error}
          </span>
        </div>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-medium'>
          <input
            type='text'
            name='address'
            autoComplete='off'
            value={formState[`${addressType}Address`].value}
            onChange={(e) => handleAddress(e.target.value)}
            maxLength='100'
            aria-invalid={formState[`${addressType}Address`].hasError}
            aria-describedby='address-note'
            aria-label='address'
            required
          />
          <label className='label-name' htmlFor='address'>
            <span className='content-name'>Address*</span>
          </label>
        </div>
        <div className='input-div form-small'>
          <input
            type='text'
            name='address-extra-info'
            autoComplete='off'
            value={formState[`${addressType}AddressNumber`].value}
            onChange={(e) => handleAddressNumber(e.target.value)}
            aria-label='apartment or suite number'
            maxLength='20'
            required
          />
          <label className='label-name' htmlFor='address-extra-info'>
            <span className='content-name'>Apt # / Suite</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <span
          id='address-note'
          className={
            formState[`${addressType}Address`].hasError
              ? "error-msg form-long"
              : "error-msg offscreen form-long"
          }
        >
          {formState[`${addressType}Address`].error}
        </span>
      </div>

      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='city'
            autoComplete='off'
            value={formState[`${addressType}City`].value}
            onChange={(e) => handleCity(e.target.value)}
            maxLength='100'
            aria-invalid={formState[`${addressType}City`].hasError}
            aria-describedby='city-note'
            aria-label='city'
            required
          />
          <label className='label-name' htmlFor='state'>
            <span className='content-name'>City*</span>
          </label>
        </div>
        <div className='input-div'>
          <input
            type='text'
            name='country'
            autoComplete='off'
            value={formState[`${addressType}Country`].value}
            onChange={(e) => handleCountry(e.target.value)}
            maxLength='20'
            aria-invalid={formState[`${addressType}Country`].hasError}
            aria-describedby='country-note'
            aria-label='country'
            required
          />
          <label className='label-name' htmlFor='country'>
            <span className='content-name'>Country*</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <div className='error-msg'>
          <span
            id='city-note'
            className={
              formState[`${addressType}City`].hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
          >
            {formState[`${addressType}City`].error}
          </span>
        </div>
        <span
          id='country-note'
          className={
            formState[`${addressType}Country`].hasError
              ? "error-msg"
              : "error-msg offscreen"
          }
        >
          {formState[`${addressType}Country`].error}
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-small'>
          <input
            type='text'
            name='zip-code'
            autoComplete='off'
            value={formState[`${addressType}Zip`].value}
            onChange={(e) => handleZip(e.target.value)}
            maxLength='5'
            aria-invalid={formState[`${addressType}Zip`].hasError}
            aria-describedby='zip-note'
            aria-label='zip code'
            required
          />
          <label className='label-name' htmlFor='zip-code'>
            <span className='content-name'>Postal Code*</span>
          </label>
        </div>
        <div className='input-div form-medium'>
          <input
            type='text'
            name='phone-number'
            autoComplete='off'
            value={formState[`${addressType}Phone`].value}
            onChange={(e) => handlePhone(e.target.value)}
            maxLength='20'
            aria-invalid={formState[`${addressType}Phone`].hasError}
            aria-describedby='phone-note'
            aria-label='phone number'
            required
          />
          <label className='label-name' htmlFor='phone-number'>
            <span className='content-name'>Phone Number*</span>
          </label>
        </div>
      </div>
      <div className='error-msg-line'>
        <div className='form-small'>
          <span
            id='zip-note'
            className={
              formState[`${addressType}Zip`].hasError
                ? "error-msg form-small"
                : "error-msg offscreen form-small"
            }
          >
            {formState[`${addressType}Zip`].error}
          </span>
        </div>
        <span
          id='phone-note'
          className={
            formState[`${addressType}Phone`].hasError
              ? "error-msg form-medium"
              : "error-msg offscreen form-medium"
          }
        >
          {formState[`${addressType}Phone`].error}
        </span>
      </div>
    </>
  );
};

export default AddressInfo;
