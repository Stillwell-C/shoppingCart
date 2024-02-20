import { Link, useLocation, useNavigate } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import CartFullPageItem from "./CartFullPageItem";
import { useEffect, useRef } from "react";

const CartFullPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const stockMsgRef = useRef<HTMLDivElement>(null);

  const { cart, itemTotal, priceTotal, stockCheck } = useCartContext();

  const outOfStockItem = stockCheck();

  useEffect(() => {
    if (outOfStockItem) {
      stockMsgRef?.current?.focus();
    }
  }, [outOfStockItem]);

  const handleButtonClick = () => {
    if (outOfStockItem) {
      stockMsgRef?.current?.focus();
      stockMsgRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    navigate("/checkout");
  };

  const errorItem = location?.state?.errorItem
    ? `Error with item: ${location?.state?.errorItem}`
    : "One or more items in your cart are out of stock.";

  const errorMsg =
    location?.state?.errorMsg || "Please remove before proceeding to checkout.";

  const errorDiv = (
    <div className='text-rose-600 font-semibold' ref={stockMsgRef}>
      <p>Error.</p>
      <p>{errorItem}</p>
      <p>{errorMsg}</p>
    </div>
  );

  return (
    <section className='mt-24 mb-32 mx-auto w-4/5 xl:w-[1024px] min-h-screen flex justify-center'>
      <div className='flex flex-col'>
        <h2 className='text-4xl my-6 self-center'>cart</h2>
        {(outOfStockItem || location?.state?.error) && errorDiv}
        {itemTotal < 1 && (
          <div className='flex flex-col gap-4'>
            <p>Your cart is empty.</p>
            <Link to='/shop'>
              <button className='grey-button py-2 px-3'>Shop Now</button>
            </Link>
          </div>
        )}
        <ul className='flex flex-col justify-start items-start gap-4 list-none'>
          {cart.map((item) => (
            <CartFullPageItem key={item.searchName} item={item} />
          ))}
        </ul>
        <div className='flex flex-col gap-2 mt-4 mb-1'>
          <p className='font-semibold'>Total Items: {itemTotal}</p>
          <p className='text-xl font-semibold'>Total: {priceTotal}</p>
        </div>
        {itemTotal >= 1 && (
          <div>
            <button
              className='grey-button px-3'
              disabled={itemTotal < 1}
              onClick={handleButtonClick}
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartFullPage;
