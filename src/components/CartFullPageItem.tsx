import { Link } from "react-router-dom";
import { CartItemType } from "../context/ShoppingCartProvider";
import useCartContext from "../hooks/useCartContext";
import useFormatPrice from "../hooks/useFormatPrice";

type PropsType = {
  item: CartItemType;
};

const CartFullPageItem = ({ item }: PropsType) => {
  const { REDUCER_ACTIONS, dispatch } = useCartContext();

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_200,c_fill/${item.img_id}`;

  const handleReduceQuantity = () => {
    if (item.qty <= 1) return;
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: item.qty - 1 },
    });
  };

  const handleIncreaseQuantity = () => {
    if (item.qty >= 25) return;
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: item.qty + 1 },
    });
  };

  const handleDeleteItem = () => {
    dispatch({
      type: REDUCER_ACTIONS.DELETE,
      payload: item,
    });
  };

  const subtotal = useFormatPrice(item.qty * item.price);

  const lowStockDisplay = item.stock_level === "LOW" && (
    <p>Only a few left. Order soon!</p>
  );

  const outOfStock = item.stock_level === "OUT";

  return (
    <li className='order-fullpage-item-info'>
      <Link to={`/shop/fullcollection/${item.searchName}`}>
        <img src={itemURL} alt={item.name} />
      </Link>
      <div>
        <Link to={`/shop/fullcollection/${item.searchName}`}>
          <p className='order-fullpage-font-lg order-fullpage-bold'>
            {item.name}
          </p>
        </Link>
        {lowStockDisplay}
        {outOfStock && <p>Sorry, this product is out of stock.</p>}
        <div className='order-fullpage-quantity'>
          <span>Quantity:</span>
          <button
            onClick={handleReduceQuantity}
            disabled={item.qty <= 1 || outOfStock}
            aria-label='reduce quantity by one'
          >
            −
          </button>
          <span>{item.qty}</span>
          <button
            onClick={handleIncreaseQuantity}
            disabled={item.qty >= 25 || outOfStock}
            aria-label='increase quantity by one'
          >
            +
          </button>
        </div>
        <p className='order-fullpage-bold'>Subtotal: {subtotal}</p>
        <button
          onClick={handleDeleteItem}
          className='dropdown-delete'
          aria-label='delete item'
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartFullPageItem;
