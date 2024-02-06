export const initialState = {
  shippingFirstName: { value: "", hasError: false, error: "" },
  shippingLastName: { value: "", hasError: false, error: "" },
  shippingCompanyName: { value: "", hasError: false, error: "" },
  shippingAddress: { value: "", hasError: false, error: "" },
  shippingAddressNumber: { value: "", hasError: false, error: "" },
  shippingCity: { value: "", hasError: false, error: "" },
  shippingCountry: { value: "", hasError: false, error: "" },
  shippingZip: { value: "", hasError: false, error: "" },
  shippingPhone: { value: "", hasError: false, error: "" },
  billingFirstName: { value: "", hasError: false, error: "" },
  billingLastName: { value: "", hasError: false, error: "" },
  billingCompanyName: { value: "", hasError: false, error: "" },
  billingAddress: { value: "", hasError: false, error: "" },
  billingAddressNumber: { value: "", hasError: false, error: "" },
  billingCity: { value: "", hasError: false, error: "" },
  billingCountry: { value: "", hasError: false, error: "" },
  billingZip: { value: "", hasError: false, error: "" },
  billingPhone: { value: "", hasError: false, error: "" },
  creditCardNumber: { value: "", hasError: false, error: "" },
  creditCardExpiry: { value: "", hasError: false, error: "" },
  creditCardCVC: { value: "", hasError: false, error: "" },
  billingAddressDuplicate: true,
};

export const REDUCER_ACTION_TYPE = {
  UPDATE: "UPDATE",
};

export type PropertyName =
  | "shippingFirstName"
  | "shippingLastName"
  | "shippingCompanyName"
  | "shippingAddress"
  | "shippingAddressNumber"
  | "shippingCity"
  | "shippingCountry"
  | "shippingZip"
  | "shippingPhone"
  | "billingFirstName"
  | "billingLastName"
  | "billingCompanyName"
  | "billingAddress"
  | "billingAddressNumber"
  | "billingCity"
  | "billingCountry"
  | "billingZip"
  | "billingPhone"
  | "creditCardNumber"
  | "creditCardExpiry"
  | "creditCardCVC";

export type ReducerActionType = {
  type: string;
  payload: {
    propertyName: PropertyName;
    value: string;
    hasError: boolean;
    error: string;
  };
};

type StateType = typeof initialState;

export const CheckoutReducer = (
  state: StateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.UPDATE:
      const { propertyName, value, hasError, error } = action.payload;
      return {
        ...state,
        [propertyName]: { ...state[propertyName], value, hasError, error },
      };

    default:
      return state;
  }
};
