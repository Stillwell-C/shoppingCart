import { Link } from "react-router-dom";
import { CartItemType } from "../context/ShoppingCartProvider";
import useCartContext from "../hooks/useCartContext";

type PropsType = {
  item: CartItemType;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartDropDownItem = ({ item, setCartOpen }: PropsType) => {
  const { REDUCER_ACTIONS, dispatch } = useCartContext();

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_150,c_fill/${item.img_id}`;

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

  return (
    <li className='flex flex-col gap-1'>
      <Link
        to={`/shop/fullcollection/${item.searchName}`}
        onClick={() => setCartOpen(false)}
      >
        <p className='text-lg' aria-label='item name'>
          {item.name}
        </p>
      </Link>
      <img className=' h-36 w-28 object-cover' src={itemURL} alt={item.name} />
      <div className='flex justify-start items-center gap-3'>
        <button
          onClick={handleReduceQuantity}
          disabled={item.qty <= 1}
          aria-label='reduce quantity by one'
          className='grey-button'
        >
          −
        </button>
        <p aria-label='item quantity'>{item.qty}</p>
        <button
          onClick={handleIncreaseQuantity}
          disabled={item.qty >= 25}
          aria-label='increase quantity by one'
          className='grey-button'
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={handleDeleteItem}
          className='grey-button'
          aria-label='delete item'
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartDropDownItem;
