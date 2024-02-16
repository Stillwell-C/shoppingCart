import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import shoppingbag from "../assets/shopping-cart.svg";
import useCartContext from "../hooks/useCartContext";
import CartDropDown from "./CartDropDown";

const Navbar = () => {
  const { pathname } = useLocation();

  const shopActive = pathname.match(/^\/shop/i);
  const aboutActive = pathname.match(/^\/about/i);

  const [cartOpen, setCartOpen] = useState(false);
  const { itemTotal } = useCartContext();

  const handleShoppingBag = () => {
    setCartOpen((prev) => !prev);
  };

  const handleClose = () => {
    setCartOpen(false);
  };

  return (
    <header className=' h-24 p-6 z-10 fixed w-full top-0 left-0 bg-white border-solid border-b border-[#f1f1f1] '>
      <div className='w-full h-full flex justify-between content-center '>
        <div className='h-full flex justify-center content-center'>
          <Link
            to='/'
            className='h-full flex flex-col justify-center content-center transition-all ease-in-out hover:scale-[1.01]'
            aria-label='move to home page'
            onClick={handleClose}
          >
            <h1 className='font-light text-5xl tracking-[.5rem] underline'>
              in hands
            </h1>
            <p className='text-base'>lifestyle & boutique</p>
          </Link>
        </div>
        <nav className='flex items-center gap-4'>
          <NavLink
            className={`text-xl ${aboutActive ? "font-bold" : ""}`}
            to='/about'
            aria-label='move to about page'
            onClick={handleClose}
          >
            About
          </NavLink>
          <NavLink
            className={`text-xl ${shopActive ? "font-bold" : ""}`}
            to='/shop'
            aria-label='move to shop page'
            onClick={handleClose}
          >
            Shop
          </NavLink>
          <div className='flex items-center gap-1'>
            <span aria-label='number of items in cart'>{itemTotal}</span>
            <button
              onClick={handleShoppingBag}
              aria-label='open shopping cart menu'
              className='bg-transparent cursor-pointer'
            >
              <img
                className=' h-7 '
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
