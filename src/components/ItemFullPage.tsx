import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";
import useFormatPrice from "../hooks/useFormatPrice";
import useCartContext from "../hooks/useCartContext";
import { useQuery } from "@apollo/client";
import { GET_ITEMS_BY_SEARCHNAME } from "../queries/productQueries";

type ItemType = {
  name: string;
  searchName: string;
  price: number;
  img_id: string;
  SKU: string;
  stock_level: string;
};

const ItemFullPage = () => {
  const { itemID } = useParams();
  const navigate = useNavigate();
  const { REDUCER_ACTIONS, dispatch, cart } = useCartContext();

  const { loading, error, data } = useQuery(GET_ITEMS_BY_SEARCHNAME, {
    variables: { searchName: itemID },
  });

  console.log(data);

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_500,c_fill/${data?.getProductBySearchName?.img_id}`;

  const itemInCart = cart.find(
    (item) => item.searchName === data?.getProductBySearchName?.searchName
  );
  const itemQtyExceeded = itemInCart && itemInCart.qty >= 25;

  const itemPrice = useFormatPrice(data?.getProductBySearchName?.price);

  useEffect(() => {
    if (!loading && !data?.getProductBySearchName?.SKU) {
      navigate("/notfound");
    }
  }, [data, loading]);

  const handleAddToCart = () => {
    if (itemQtyExceeded) return;
    if (loading || error || !data.getProductBySearchName.SKU) return;

    const cartItemData: ItemType = {
      name: data.getProductBySearchName.name,
      searchName: data.getProductBySearchName.searchName,
      price: data.getProductBySearchName.price,
      img_id: data.getProductBySearchName.img_id,
      SKU: data.getProductBySearchName.SKU,
      stock_level: data.getProductBySearchName.stock_level,
    };

    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...cartItemData, qty: 1 },
    });
  };

  const buttonDisable =
    itemQtyExceeded || data?.getProductBySearchName?.stock_level === "OUT";

  const lowStockDisplay = !loading &&
    data?.getProductBySearchName?.stock_level === "LOW" && (
      <p>Only a few left. Order soon!</p>
    );

  const outOfStockDisplay = data?.getProductBySearchName?.stock_level ===
    "OUT" && <p>Out of Stock</p>;

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
        <div className='item-information'>
          <p>{data?.getProductBySearchName?.description}</p>
          <p className='item-info-price'>{itemPrice}</p>
        </div>
        <div className='item-stock-info'>
          {itemInCart && (
            <p>
              In your <Link to='/cart'>Shopping Cart</Link>
            </p>
          )}
          {lowStockDisplay}
          {outOfStockDisplay}
        </div>
        <div>
          <button disabled={buttonDisable} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemFullPage;
