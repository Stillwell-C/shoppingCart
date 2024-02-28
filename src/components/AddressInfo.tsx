import { useEffect, useRef, useState } from "react";
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

  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [companyNameFocus, setCompanyNameFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [addressNumberFocus, setAddressNumberFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [countryFocus, setCountryFocus] = useState(false);
  const [zipFocus, setZipFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

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
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full md:w-[325px]'>
          <div className='relative h-[50px] overflow-hidden text-lg checkout-input-div'>
            <input
              type='text'
              name='firstname'
              autoComplete='off'
              value={formState[propertyNames.firstName].value}
              onChange={(e) => handleFirstName(e.target.value)}
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}
              maxLength={30}
              aria-invalid={formState[propertyNames.firstName].hasError}
              aria-describedby='firstname-note'
              aria-label='first name'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='firstname'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.firstName].value.length ||
                  firstNameFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                First Name*
              </span>
            </label>
          </div>
          <span
            id='firstname-note'
            className={
              formState[propertyNames.firstName].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={firstNameRef}
          >
            {formState[propertyNames.firstName].error}
          </span>
        </div>
        <div className='w-full md:w-[325px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='lastname'
              autoComplete='off'
              value={formState[propertyNames.lastName].value}
              onChange={(e) => handleLastName(e.target.value)}
              aria-invalid={formState[propertyNames.lastName].hasError}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
              aria-describedby='lastname-note'
              aria-label='last name'
              maxLength={30}
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='lastname'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.lastName].value.length ||
                  lastNameFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Last Name*
              </span>
            </label>
          </div>
          <span
            id='lastname-note'
            className={
              formState[propertyNames.lastName].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={lastNameRef}
          >
            {formState[propertyNames.lastName].error}
          </span>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full md:w-[650px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='company-name'
              autoComplete='off'
              value={formState[propertyNames.companyName].value}
              onChange={(e) => handleCompanyName(e.target.value)}
              onFocus={() => setCompanyNameFocus(true)}
              onBlur={() => setCompanyNameFocus(false)}
              aria-label='company name'
              aria-invalid={formState[propertyNames.companyName].hasError}
              aria-describedby='companyname-note'
              maxLength={50}
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='company-name'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.companyName].value.length ||
                  companyNameFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Company Name
              </span>
            </label>
          </div>
          <span
            id='companyname-note'
            className={
              formState[propertyNames.companyName].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={companyNameRef}
          >
            {formState[propertyNames.companyName].error}
          </span>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full md:w-[425px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='address'
              autoComplete='off'
              value={formState[propertyNames.address].value}
              onChange={(e) => handleAddress(e.target.value)}
              onFocus={() => setAddressFocus(true)}
              onBlur={() => setAddressFocus(false)}
              maxLength={100}
              aria-invalid={formState[propertyNames.address].hasError}
              aria-describedby='address-note'
              aria-label='address'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='address'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.address].value.length || addressFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Address*
              </span>
            </label>
          </div>
          <span
            id='address-note'
            className={
              formState[propertyNames.address].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={addressRef}
          >
            {formState[propertyNames.address].error}
          </span>
        </div>
        <div className='w-full sm:w-2/4 md:w-[225px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='address-extra-info'
              autoComplete='off'
              value={formState[propertyNames.addressNumber].value}
              onChange={(e) => handleAddressNumber(e.target.value)}
              onFocus={() => setAddressNumberFocus(true)}
              onBlur={() => setAddressNumberFocus(false)}
              aria-label='apartment or suite number'
              maxLength={20}
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='address-extra-info'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.addressNumber].value.length ||
                  addressNumberFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Apt # / Suite
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full md:w-[325px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='city'
              autoComplete='off'
              value={formState[propertyNames.city].value}
              onChange={(e) => handleCity(e.target.value)}
              onFocus={() => setCityFocus(true)}
              onBlur={() => setCityFocus(false)}
              maxLength={100}
              aria-invalid={formState[propertyNames.city].hasError}
              aria-describedby='city-note'
              aria-label='city'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='state'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.city].value.length || cityFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                City*
              </span>
            </label>
          </div>
          <span
            id='city-note'
            className={
              formState[propertyNames.city].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={cityRef}
          >
            {formState[propertyNames.city].error}
          </span>
        </div>
        <div className='w-full md:w-[325px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='country'
              autoComplete='off'
              value={formState[propertyNames.country].value}
              onChange={(e) => handleCountry(e.target.value)}
              onFocus={() => setCountryFocus(true)}
              onBlur={() => setCountryFocus(false)}
              maxLength={20}
              aria-invalid={formState[propertyNames.country].hasError}
              aria-describedby='country-note'
              aria-label='country'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='country'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.country].value.length || countryFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Country*
              </span>
            </label>
          </div>
          <span
            id='country-note'
            className={
              formState[propertyNames.country].hasError
                ? "text-rose-600 font-semibold text-lg w-[325px]"
                : "text-rose-600 font-semibold text-lg w-[325px] absolute -left-[9999px]"
            }
            ref={countryRef}
          >
            {formState[propertyNames.country].error}
          </span>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full md:w-[650px]'>
        <div className='w-full sm:w-2/4 md:w-[225px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='zip-code'
              autoComplete='off'
              value={formState[propertyNames.zip].value}
              onChange={(e) => handleZip(e.target.value)}
              onFocus={() => setZipFocus(true)}
              onBlur={() => setZipFocus(false)}
              maxLength={5}
              aria-invalid={formState[propertyNames.zip].hasError}
              aria-describedby='zip-note'
              aria-label='zip code'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='zip-code'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.zip].value.length || zipFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Postal Code*
              </span>
            </label>
          </div>
          <span
            id='zip-note'
            className={
              formState[propertyNames.zip].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={zipRef}
          >
            {formState[propertyNames.zip].error}
          </span>
        </div>
        <div className='w-full md:w-[425px]'>
          <div className='relative h-[50px] overflow-hidden text-lg'>
            <input
              type='text'
              name='phone-number'
              autoComplete='off'
              value={formState[propertyNames.phone].value}
              onChange={(e) => handlePhone(e.target.value)}
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(false)}
              maxLength={20}
              aria-invalid={formState[propertyNames.phone].hasError}
              aria-describedby='phone-note'
              aria-label='phone number'
              className='peer w-full h-full pt-5 text-[#333] outline-none'
              required
            />
            <label
              className='absolute bottom-0 left-[0%] w-full h-full pointer-events-none border-b border-solid border-black after:content-[" "] after:absolute after:h-full after:w-full after:left-0 -after:bottom-[1px] after:border-b-[2px] after:border-solid after:border-black after:-translate-x-[105%] after:transition-all after:duration-300 after:ease peer-focus:after:translate-x-[0%] peer-valid:after:translate-x-[0%]'
              htmlFor='phone-number'
            >
              <span
                className={`absolute bottom-1 left-0 transition-all duration-500 ease ${
                  formState[propertyNames.phone].value.length || phoneFocus
                    ? "-translate-y-[130%] text-sm"
                    : " "
                }`}
              >
                Phone Number*
              </span>
            </label>
          </div>
          <span
            id='phone-note'
            className={
              formState[propertyNames.phone].hasError
                ? "text-rose-600 font-semibold text-lg"
                : "text-rose-600 font-semibold text-lg absolute -left-[9999px]"
            }
            ref={phoneRef}
          >
            {formState[propertyNames.phone].error}
          </span>
        </div>
      </div>
    </>
  );
};

export default AddressInfo;
