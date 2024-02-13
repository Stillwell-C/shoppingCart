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
    <div className='order-cart-error-div' ref={stockMsgRef}>
      <p>Error.</p>
      <p>{errorItem}</p>
      <p>{errorMsg}</p>
    </div>
  );

  return (
    <div className='order-fullpage-container'>
      <h2>cart</h2>
      {(outOfStockItem || location?.state?.error) && errorDiv}
      {itemTotal < 1 && (
        <div className='order-fullpage-empty-container'>
          <p>Your cart is empty.</p>
          <Link to='/shop'>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
      <ul className='order-fullpage-items'>
        {cart.map((item) => (
          <CartFullPageItem key={item.searchName} item={item} />
        ))}
      </ul>
      <div className='order-fullpage-info'>
        <p className='order-fullpage-bold'>Total Items: {itemTotal}</p>
        <p className='order-fullpage-bold order-fullpage-font-lg'>
          Total: {priceTotal}
        </p>
      </div>
      {itemTotal < 1 && (
        <div className='order-fullpage-button'>
          <button disabled>Checkout Now</button>
        </div>
      )}
      {itemTotal >= 1 && (
        <div className='order-fullpage-button'>
          <button onClick={handleButtonClick}>Checkout Now</button>
        </div>
      )}
    </div>
  );
};

export default CartFullPage;
