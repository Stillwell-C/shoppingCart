import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import shoppingbag from "../assets/shopping-cart.svg";
import useCartContext from "../hooks/useCartContext";
import CartDropDown from "./CartDropDown";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemTotal } = useCartContext();

  const handleShoppingBag = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <header>
      <div className='nav-container'>
        <Link to='/' className='nav-title' aria-label='link to home page'>
          <h1 className='nav-title-top'>in hands</h1>
          <h4 className='nav-title-bottom'>lifestyle & boutique</h4>
        </Link>
        <nav className='nav-right'>
          <NavLink to='/about' aria-label='link to about page'>
            About
          </NavLink>
          <NavLink to='/shop' aria-label='link to shop page'>
            Shop
          </NavLink>
          <div className='shoppingbag-container'>
            <span data-testid='shoppingbag-quantity'>{itemTotal}</span>
            <button
              onClick={handleShoppingBag}
              aria-label='open shopping cart menu'
            >
              <img
                className='shoppingbag-logo'
                src={shoppingbag}
                alt='shopping bag button'
              />
            </button>
          </div>
        </nav>
      </div>
      {cartOpen && <CartDropDown setCartOpen={setCartOpen} />}
    </header>
  );
};

export default Navbar;
