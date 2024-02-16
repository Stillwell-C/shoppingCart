import useCartContext from "../hooks/useCartContext";
import { Link } from "react-router-dom";
import CartDropDownItem from "./CartDropDownItem";
import FocusTrap from "focus-trap-react";
import { useEffect } from "react";

type PropsType = {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartDropDown = ({ setCartOpen }: PropsType) => {
  const { cart, itemTotal, priceTotal } = useCartContext();

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

  return (
    <>
      <div className='absolute w-72 top-24 right-0 bottom-3 z-20 '>
        <div
          role='dialog'
          aria-label='shopping cart dialog'
          className=' px-4 min-h-80 max-h-[calc(90vh-96px)] w-64 bg-white border border-solid border-[#f4f4f4] rounded overflow-y-auto'
        >
          <div className='flex justify-between items-center m-4 '>
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
          <ul className='flex flex-col gap-4 list-none'>
            {cart.map((item) => (
              <CartDropDownItem
                item={item}
                setCartOpen={setCartOpen}
                key={item.searchName}
              />
            ))}
          </ul>
          <div className='flex flex-col my-5'>
            <h3 aria-label='total price' className='font-semibold'>
              Total: {priceTotal}
            </h3>
            <div className='flex flex-col gap-2 mt-4'>
              {itemTotal < 1 && (
                <div>
                  <button disabled>Checkout Now</button>
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
      <div
        className='fixed top-24 right-0 left-0 bottom-0 z-10'
        onClick={() => setCartOpen(false)}
      ></div>
    </>
  );
};

export default CartDropDown;
