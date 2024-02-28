import useCartContext from "../hooks/useCartContext";
import { Link } from "react-router-dom";
import CartDropDownItem from "./CartDropDownItem";
import { useEffect, useState } from "react";

type PropsType = {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartOpen: Boolean;
};

const CartDropDown = ({ setCartOpen, cartOpen }: PropsType) => {
  const { cart, itemTotal, priceTotal } = useCartContext();

  const [cartOpenFactoringDuration, setCartOpenFactoringDuration] =
    useState(cartOpen);

  useEffect(() => {
    //This will close modal with escape key
    function keyListener(e: KeyboardEvent) {
      if (e.code === "Escape") {
        setCartOpen(false);
      }
    }

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  useEffect(() => {
    if (!cartOpen) setCartOpenFactoringDuration(false);

    const timeout = setTimeout(() => {
      setCartOpenFactoringDuration(cartOpen);
    }, 300);

    return () => clearTimeout(timeout);
  }, [cartOpen]);

  return (
    <>
      <div
        className={`${
          cartOpen
            ? "max-h-screen sm:max-h-[calc(90vh-96px)]"
            : "invisible max-h-0"
        } absolute w-screen sm:w-72 top-24 right-0 z-20 overflow-hidden bg-white border border-solid border-[#f4f4f4] rounded transition-max-height duration-700 ease-in-out flex flex-col flex-1`}
      >
        <div
          role='dialog'
          aria-label='shopping cart dialog'
          className='pb-28 sm:pb-0 h-full flex flex-col flex-1 overflow-y-hidden'
        >
          <div className='py-4 border-b border-solid border-[#f4f4f4]'>
            <div className='flex justify-between items-center h-full px-4'>
              <h2 id='shopping-cart-heading' className='text-xl font-semibold'>
                Shopping Cart
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                aria-label='close shopping cart menu'
              >
                ✕
              </button>
            </div>
          </div>
          <div
            className={`${
              cartOpenFactoringDuration
                ? "overflow-y-auto"
                : "overflow-y-hidden"
            } h-full flex flex-col flex-1`}
          >
            {itemTotal < 1 && (
              <div className='flex flex-col items-center justify-center gap-1 my-8'>
                <p>Your cart is empty.</p>
                <Link to='/shop'>
                  <button
                    className='grey-button'
                    onClick={() => setCartOpen(false)}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            )}
            <ul className='flex flex-col gap-4 list-none my-4'>
              {cart.map((item) => (
                <CartDropDownItem
                  item={item}
                  setCartOpen={setCartOpen}
                  key={item.searchName}
                />
              ))}
            </ul>
            <div className='flex flex-col my-5 px-4'>
              <h3 aria-label='total price' className='font-semibold'>
                Total: {priceTotal}
              </h3>
              <div className='flex flex-col gap-2 mt-4'>
                {itemTotal < 1 && (
                  <div>
                    <button className='grey-button' disabled>
                      Checkout Now
                    </button>
                  </div>
                )}
                {itemTotal >= 1 && (
                  <Link to='/checkout'>
                    <button
                      className='grey-button'
                      onClick={() => setCartOpen(false)}
                    >
                      Checkout Now
                    </button>
                  </Link>
                )}
                <Link to='/cart'>
                  <button
                    className='grey-button'
                    onClick={() => setCartOpen(false)}
                  >
                    View Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          cartOpen ? "fixed" : "hidden"
        } top-24 right-0 left-0 bottom-0 z-10`}
        onClick={() => setCartOpen(false)}
      ></div>
    </>
  );
};

export default CartDropDown;
