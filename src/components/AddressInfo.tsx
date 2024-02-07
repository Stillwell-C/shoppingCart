import { useEffect, useRef } from "react";
import { validateInput } from "./CheckoutFormValidation";
import {
  PropertyName,
  ReducerActionType,
  StateType,
} from "./CheckoutFormReducer";

type PropsType = {
  formState: StateType;
  dispatch: React.Dispatch<ReducerActionType>;
  addressType: string;
};

type ReducerPropertyNames = {
  [key: string]: PropertyName;
};

const AddressInfo = ({ formState, dispatch, addressType }: PropsType) => {
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const companyNameRef = useRef<HTMLSpanElement>(null);
  const addressRef = useRef<HTMLSpanElement>(null);
  const cityRef = useRef<HTMLSpanElement>(null);
  const countryRef = useRef<HTMLSpanElement>(null);
  const zipRef = useRef<HTMLSpanElement>(null);
  const phoneRef = useRef<HTMLSpanElement>(null);

  const propertyNames: ReducerPropertyNames = {
    firstName: `${addressType}FirstName` as PropertyName,
    lastName: `${addressType}LastName` as PropertyName,
    companyName: `${addressType}CompanyName` as PropertyName,
    address: `${addressType}Address` as PropertyName,
    addressNumber: `${addressType}AddressNumber` as PropertyName,
    city: `${addressType}City` as PropertyName,
    country: `${addressType}Country` as PropertyName,
    zip: `${addressType}Zip` as PropertyName,
    phone: `${addressType}Phone` as PropertyName,
  };

  const handleFirstName = (input: string) => {
    const name = `${addressType}FirstName`;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleLastName = (input: string) => {
    const name = propertyNames.lastName;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleCompanyName = (input: string) => {
    const name = propertyNames.companyName;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleAddress = (input: string) => {
    const name = propertyNames.address;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleAddressNumber = (input: string) => {
    const name = `${addressType}AddressNumber`;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleCity = (input: string) => {
    const name = propertyNames.city;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleCountry = (input: string) => {
    const name = propertyNames.country;
    validateInput(name as PropertyName, input, dispatch);
  };
  const handleZip = (input: string) => {
    const regex = /^[0-9]+$/;
    const name = propertyNames.zip;

    if (input === "" || regex.test(input)) {
      validateInput(name as PropertyName, input, dispatch);
    }
  };
  const handlePhone = (input: string) => {
    const regex = /^[0-9- ()+]+$/;
    const name = propertyNames.phone;

    if (input === "" || regex.test(input)) {
      validateInput(name as PropertyName, input, dispatch);
    }
  };

  useEffect(() => {
    if (formState[propertyNames.firstName].hasError) {
      firstNameRef?.current?.focus();
    }
    if (formState[propertyNames.lastName].hasError) {
      lastNameRef?.current?.focus();
    }
    if (formState[propertyNames.companyName].hasError) {
      companyNameRef?.current?.focus();
    }
    if (formState[propertyNames.address].hasError) {
      addressRef?.current?.focus();
    }
    if (formState[propertyNames.city].hasError) {
      cityRef?.current?.focus();
    }
    if (formState[propertyNames.country].hasError) {
      countryRef?.current?.focus();
    }
    if (formState[propertyNames.zip].hasError) {
      zipRef?.current?.focus();
    }
    if (formState[propertyNames.phone].hasError) {
      phoneRef?.current?.focus();
    }
  }, [
    formState[propertyNames.firstName].hasError,
    formState[propertyNames.lastName].hasError,
    formState[propertyNames.companyName].hasError,
    formState[propertyNames.address].hasError,
    formState[propertyNames.city].hasError,
    formState[propertyNames.country].hasError,
    formState[propertyNames.zip].hasError,
    formState[propertyNames.phone].hasError,
  ]);

  return (
    <>
      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='firstname'
            autoComplete='off'
            value={formState[propertyNames.firstName].value}
            onChange={(e) => handleFirstName(e.target.value)}
            maxLength={30}
            aria-invalid={formState[propertyNames.firstName].hasError}
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
            value={formState[propertyNames.lastName].value}
            onChange={(e) => handleLastName(e.target.value)}
            aria-invalid={formState[propertyNames.lastName].hasError}
            aria-describedby='lastname-note'
            aria-label='last name'
            maxLength={30}
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
              formState[propertyNames.firstName].hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
            ref={firstNameRef}
          >
            {formState[propertyNames.firstName].error}
          </span>
        </div>
        <span
          id='lastname-note'
          className={
            formState[propertyNames.lastName].hasError
              ? "error-msg"
              : "error-msg offscreen"
          }
          ref={lastNameRef}
        >
          {formState[propertyNames.lastName].error}
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-long'>
          <input
            type='text'
            name='company-name'
            autoComplete='off'
            value={formState[propertyNames.companyName].value}
            onChange={(e) => handleCompanyName(e.target.value)}
            aria-label='company name'
            aria-invalid={formState[propertyNames.companyName].hasError}
            aria-describedby='companyname-note'
            maxLength={50}
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
              formState[propertyNames.companyName].hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
            ref={companyNameRef}
          >
            {formState[propertyNames.companyName].error}
          </span>
        </div>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-medium'>
          <input
            type='text'
            name='address'
            autoComplete='off'
            value={formState[propertyNames.address].value}
            onChange={(e) => handleAddress(e.target.value)}
            maxLength={100}
            aria-invalid={formState[propertyNames.address].hasError}
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
            value={formState[propertyNames.addressNumber].value}
            onChange={(e) => handleAddressNumber(e.target.value)}
            aria-label='apartment or suite number'
            maxLength={20}
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
            formState[propertyNames.address].hasError
              ? "error-msg form-long"
              : "error-msg offscreen form-long"
          }
          ref={addressRef}
        >
          {formState[propertyNames.address].error}
        </span>
      </div>

      <div className='checkout-form-line'>
        <div className='input-div'>
          <input
            type='text'
            name='city'
            autoComplete='off'
            value={formState[propertyNames.city].value}
            onChange={(e) => handleCity(e.target.value)}
            maxLength={100}
            aria-invalid={formState[propertyNames.city].hasError}
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
            value={formState[propertyNames.country].value}
            onChange={(e) => handleCountry(e.target.value)}
            maxLength={20}
            aria-invalid={formState[propertyNames.country].hasError}
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
              formState[propertyNames.city].hasError
                ? "error-msg"
                : "error-msg offscreen"
            }
            ref={cityRef}
          >
            {formState[propertyNames.city].error}
          </span>
        </div>
        <span
          id='country-note'
          className={
            formState[propertyNames.country].hasError
              ? "error-msg"
              : "error-msg offscreen"
          }
          ref={countryRef}
        >
          {formState[propertyNames.country].error}
        </span>
      </div>
      <div className='checkout-form-line'>
        <div className='input-div form-small'>
          <input
            type='text'
            name='zip-code'
            autoComplete='off'
            value={formState[propertyNames.zip].value}
            onChange={(e) => handleZip(e.target.value)}
            maxLength={5}
            aria-invalid={formState[propertyNames.zip].hasError}
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
            value={formState[propertyNames.phone].value}
            onChange={(e) => handlePhone(e.target.value)}
            maxLength={20}
            aria-invalid={formState[propertyNames.phone].hasError}
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
              formState[propertyNames.zip].hasError
                ? "error-msg form-small"
                : "error-msg offscreen form-small"
            }
            ref={zipRef}
          >
            {formState[propertyNames.zip].error}
          </span>
        </div>
        <span
          id='phone-note'
          className={
            formState[propertyNames.phone].hasError
              ? "error-msg form-medium"
              : "error-msg offscreen form-medium"
          }
          ref={phoneRef}
        >
          {formState[propertyNames.phone].error}
        </span>
      </div>
    </>
  );
};

export default AddressInfo;
