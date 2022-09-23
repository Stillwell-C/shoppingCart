import React from "react";

const AddressInfo = ({
  firstName,
  setFirstName,
  firstNameValid,
  lastName,
  setLastName,
  lastNameValid,
  companyName,
  setCompanyName,
  address,
  setAddress,
  addressValid,
  addressNumber,
  setAddressNumber,
  city,
  setCity,
  cityValid,
  state,
  setState,
  stateValid,
  zip,
  setZip,
  zipValid,
  phone,
  setPhone,
  phoneValid,
}) => {
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleAddressNumber = (e) => {
    setAddressNumber(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleZip = (e) => {
    const regex = /^[0-9]+$/;

    if (e.target.value === "" || regex.test(e.target.value)) {
      setZip(e.target.value);
    }
  };
  const handlePhone = (e) => {
    const regex = /^[0-9- ()+]+$/;

    if (e.target.value === "" || regex.test(e.target.value)) {
      setPhone(e.target.value);
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
            value={firstName}
            onChange={(e) => handleFirstName(e)}
            maxLength='30'
            aria-invalid={firstNameValid ? "false" : "true"}
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
            value={lastName}
            onChange={(e) => handleLastName(e)}
            aria-invalid={lastNameValid ? "false" : "true"}
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
              firstNameValid === false && firstName
                ? "error-msg"
                : "error-msg offscreen"
            }
          >
            Must input valid name between 1-30 characters
          </span>
        </div>
        <span
          id='lastname-note'
          className={
            lastNameValid === false && lastName
              ? "error-msg"
              : "error-msg offscreen"
          }
        >
          Must input valid name between 1-30 characters
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-long'>
          <input
            type='text'
            name='company-name'
            autoComplete='off'
            value={companyName}
            onChange={(e) => handleCompanyName(e)}
            aria-label='company name'
            maxLength='50'
            required
          />
          <label className='label-name' htmlFor='company-name'>
            <span className='content-name'>Company Name</span>
          </label>
        </div>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-medium'>
          <input
            type='text'
            name='address'
            autoComplete='off'
            value={address}
            onChange={(e) => handleAddress(e)}
            maxLength='100'
            aria-invalid={addressValid ? "false" : "true"}
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
            value={addressNumber}
            onChange={(e) => handleAddressNumber(e)}
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
            addressValid === false && address
              ? "error-msg form-long"
              : "error-msg offscreen form-long"
          }
        >
          Must input a valid input address
        </span>
      </div>

      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='city'
            autoComplete='off'
            value={city}
            onChange={(e) => handleCity(e)}
            maxLength='100'
            aria-invalid={cityValid ? "false" : "true"}
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
            value={state}
            onChange={(e) => handleState(e)}
            maxLength='20'
            aria-invalid={stateValid ? "false" : "true"}
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
              cityValid === false && city ? "error-msg" : "error-msg offscreen"
            }
          >
            Must input a valid city
          </span>
        </div>
        <span
          id='country-note'
          className={
            stateValid === false && state ? "error-msg" : "error-msg offscreen"
          }
        >
          Must input a valid country
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-small'>
          <input
            type='text'
            name='zip-code'
            autoComplete='off'
            value={zip}
            onChange={(e) => handleZip(e)}
            maxLength='5'
            aria-invalid={zipValid ? "false" : "true"}
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
            value={phone}
            onChange={(e) => handlePhone(e)}
            maxLength='20'
            aria-invalid={phoneValid ? "false" : "true"}
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
              zipValid === false && zip
                ? "error-msg form-small"
                : "error-msg offscreen form-small"
            }
          >
            Must input valid postal/zip code
          </span>
        </div>
        <span
          id='phone-note'
          className={
            phoneValid === false && phone
              ? "error-msg form-medium"
              : "error-msg offscreen form-medium"
          }
        >
          Must input valid phone number
        </span>
      </div>
    </>
  );
};

export default AddressInfo;
