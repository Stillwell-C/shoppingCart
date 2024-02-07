import { Link } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import CartFullPageItem from "./CartFullPageItem";

const CartFullPage = () => {
  const { cart, itemTotal, priceTotal } = useCartContext();
  console.log(cart);

  return (
    <div className='order-fullpage-container'>
      <h2>cart</h2>
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
          <Link to='/checkout'>
            <button>Checkout Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartFullPage;
