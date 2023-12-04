import { useMemo, useReducer, createContext, ReactElement } from "react";

export type CartItemType = {
  name: string;
  price: number;
  description: string;
  imgSmall: string;
  id: string;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initialState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  DELETE: "DELETE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("ADD requires action.payload");
      }

      const { id, name, price, description, imgSmall } = action.payload;

      const itemInCart: CartItemType | undefined = state.cart.find(
        (item) => (item.id = id)
      );
      const filteredCart: CartItemType[] = !itemInCart
        ? state.cart
        : state.cart.filter((item) => item.id !== id);
      const qty: number = itemInCart ? itemInCart.qty + 1 : 1;

      return {
        ...state,
        cart: [
          ...filteredCart,
          { id, name, price, description, imgSmall, qty },
        ],
      };
    }

    case REDUCER_ACTION_TYPE.DELETE: {
      if (!action.payload) {
        throw new Error("DELETE requires action.payload");
      }

      const { id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart] };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("QUANTITY requires action.payload");
      }

      const { id, qty } = action.payload;

      const itemInCart: CartItemType | undefined = state.cart.find(
        (item) => (item.id = id)
      );

      if (!itemInCart) {
        throw new Error(
          "Item not found. Item must be in cart to alter quantity."
        );
      }

      const updatedItem: CartItemType = { ...itemInCart, qty };

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart, updatedItem] };
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error("Invalid reducer action type");
  }
};

//Hook to use in components:
const useCartContext = (initialState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Memoization should help prevent rerender
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const itemTotal: number = state.cart.reduce((previous, item) => {
    return previous + item.qty;
  }, 0);

  const priceTotal = new Intl.NumberFormat("ro-MD", {
    style: "currency",
    currency: "MDL",
  }).format(
    state.cart.reduce((previous, item) => {
      return previous + item.qty * item.price;
    }, 0)
  );

  //Alphabetize cart
  const cart = state.cart.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  //Passing dispatch will not cause rerender
  //Memoized REDUCER_ACTIONS will also help prevent this
  return { dispatch, REDUCER_ACTIONS, itemTotal, priceTotal, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initialCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  itemTotal: 0,
  priceTotal: "",
  cart: [],
};

export const CartContext = createContext<UseCartContextType>(
  initialCartContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ShoppingCartProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initialState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
