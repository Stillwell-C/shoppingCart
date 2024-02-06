import React from "react";
import { CartItemType } from "../context/ShoppingCartProvider";
import useCartContext from "../hooks/useCartContext";

type PropsType = {
  item: CartItemType;
};

const CartDropDownItem = ({ item }: PropsType) => {
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
    <li>
      <p className='dropdown-name' aria-label='item name'>
        {item.name}
      </p>
      <img src={itemURL} alt={item.name} />
      <div className='dropdown-quantity'>
        <button
          onClick={handleReduceQuantity}
          disabled={item.qty <= 1}
          aria-label='reduce quantity by one'
        >
          −
        </button>
        <p aria-label='item quantity'>{item.qty}</p>
        <button
          onClick={handleIncreaseQuantity}
          disabled={item.qty >= 25}
          aria-label='increase quantity by one'
        >
          +
        </button>
      </div>
      <button
        onClick={handleDeleteItem}
        className='dropdown-delete'
        aria-label='delete item'
      >
        Delete
      </button>
    </li>
  );
};

export default CartDropDownItem;
