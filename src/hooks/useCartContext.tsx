import React, { useContext } from "react";
import CartContext, {
  UseCartContextType,
} from "../context/ShoppingCartProvider";

const useCartContext = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCartContext;
