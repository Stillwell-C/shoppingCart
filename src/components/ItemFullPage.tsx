import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";
import useFormatPrice from "../hooks/useFormatPrice";
import useCartContext from "../hooks/useCartContext";
import { useQuery } from "@apollo/client";
import { GET_ITEMS_BY_SEARCHNAME } from "../queries/productQueries";

const ItemFullPage = () => {
  const { itemID } = useParams();
  const navigate = useNavigate();
  const { REDUCER_ACTIONS, dispatch, cart } = useCartContext();

  const [currentItem] = fullItemList.filter(
    (item) => item.id === `item${itemID}`
  );

  const { loading, error, data } = useQuery(GET_ITEMS_BY_SEARCHNAME, {
    variables: { searchName: itemID },
  });

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_500,c_fill/${data?.getProductBySearchName?.img_id}`;

  const itemInCart = cart.find((item) => item.id === `item${itemID}`);
  const itemQtyExceeded = itemInCart && itemInCart.qty >= 25;

  const itemPrice = useFormatPrice(data?.getProductBySearchName?.price);

  useEffect(() => {
    if (!loading && !data.getProductBySearchName) {
      navigate("/notfound");
    }
  }, []);

  const handleAddToCart = () => {
    if (itemQtyExceeded) return;
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...currentItem, qty: 1 },
    });
  };

  return (
    <div className='item-full-page'>
      <div className='item-full-container'>
        <h1 className='item-full-title'>
          {data?.getProductBySearchName?.name}
        </h1>
        <img
          className='item-img-medium'
          src={itemURL}
          alt={data?.getProductBySearchName?.name}
        />
        <div>
          <p>{data?.getProductBySearchName?.description}</p>
          <p>{itemPrice}</p>
        </div>
        <div>
          {itemInCart && (
            <p>
              In your <Link to='/cart'>Shopping Cart</Link>
            </p>
          )}
        </div>
        <button disabled={itemQtyExceeded} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ItemFullPage;
