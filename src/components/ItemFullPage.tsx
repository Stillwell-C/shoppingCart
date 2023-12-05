import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";
import useFormatPrice from "../hooks/useFormatPrice";
import useCartContext from "../hooks/useCartContext";

const ItemFullPage = () => {
  const { itemID } = useParams();
  const navigate = useNavigate();
  const { REDUCER_ACTIONS, dispatch, cart } = useCartContext();

  const [currentItem] = fullItemList.filter(
    (item) => item.id === `item${itemID}`
  );

  const itemInCart = cart.find((item) => item.id === `item${itemID}`);

  const itemPrice = useFormatPrice(currentItem?.price);

  useEffect(() => {
    if (!currentItem) {
      navigate("/notfound");
    }
  }, []);

  const handleAddToCart = () => {
    if (itemInCart && itemInCart.qty >= 25) return;
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...currentItem, qty: 1 },
    });
  };

  return (
    <div className='item-full-page'>
      <div className='item-full-container'>
        <h1 className='item-full-title'>{currentItem?.name}</h1>
        <img
          className='item-img-medium'
          src={currentItem?.img}
          alt={currentItem?.name}
        />
        <div>
          <p>{currentItem?.description}</p>
          <p>{itemPrice}</p>
        </div>
        <div>
          {itemInCart && (
            <p>
              In your <Link to='/cart'>Shopping Cart</Link>
            </p>
          )}
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
      <Footer />
    </div>
  );
};

export default ItemFullPage;
