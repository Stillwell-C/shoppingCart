import React from "react";
import useCartContext from "../hooks/useCartContext";
import { Link } from "react-router-dom";
import CartDropDownItem from "./CartDropDownItem";

type PropsType = {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartDropDown = ({ setCartOpen }: PropsType) => {
  const { cart, itemTotal, priceTotal } = useCartContext();

  return (
    <>
      <div className='shopping-cart-dropdown'>
        <div className='shopping-dropdown-content'>
          <div className='dropdown-header'>
            <h2>Shopping Cart</h2>
            <button
              onClick={() => setCartOpen(false)}
              aria-label='close shopping cart menu'
            >
              ✕
            </button>
          </div>
          {itemTotal < 1 && (
            <div className='dropdown-empty-container'>
              <p>Your cart is empty.</p>
              <Link to='/shop'>
                <button>Shop Now</button>
              </Link>
            </div>
          )}
          <ul className='dropdown-items'>
            {cart.map((item) => (
              <CartDropDownItem item={item} />
            ))}
          </ul>
          <div className='dropdown-footer'>
            <h3 aria-label='total price'>Total: {priceTotal}</h3>
            {itemTotal < 1 && <button disabled>Checkout Now</button>}
            {itemTotal >= 1 && (
              <Link to='/checkout'>
                <button onClick={() => setCartOpen(false)}>Checkout Now</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className='shopping-dropdown-background'></div>
    </>
  );
};

export default CartDropDown;