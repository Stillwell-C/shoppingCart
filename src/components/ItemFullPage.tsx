import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";
import useFormatPrice from "../hooks/useFormatPrice";
import useCartContext from "../hooks/useCartContext";
import { useQuery } from "@apollo/client";
import { GET_ITEM } from "../queries/productQueries";
import SkeletonItemFullPage from "./SkeletonItemFullPage";

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

  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { searchName: itemID },
  });

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_500,c_fill/${data?.product?.img_id}`;

  const itemInCart = cart.find(
    (item) => item.searchName === data?.product?.searchName
  );
  const itemQtyExceeded = itemInCart && itemInCart.qty >= 25;

  const itemPrice = useFormatPrice(data?.product?.price);

  useEffect(() => {
    if (!loading && !data?.product?.SKU) {
      navigate("/notfound");
    }
  }, [data, loading]);

  const handleAddToCart = () => {
    if (itemQtyExceeded) return;
    if (loading || error || !data.product.SKU) return;

    const cartItemData: ItemType = {
      name: data.product.name,
      searchName: data.product.searchName,
      price: data.product.price,
      img_id: data.product.img_id,
      SKU: data.product.SKU,
      stock_level: data.product.stock_level,
    };

    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...cartItemData, qty: 1 },
    });
  };

  const buttonDisable = itemQtyExceeded || data?.product?.stock_level === "OUT";

  const lowStockDisplay = !loading && data?.product?.stock_level === "LOW" && (
    <p>Only a few left. Order soon!</p>
  );

  const outOfStockDisplay = data?.product?.stock_level === "OUT" && (
    <p>Out of Stock</p>
  );

  const pageContent = (
    <div className='w-[350px] mt-32 mb-32 mx-auto min-h-screen flex flex-col'>
      <h1 className='text-center text-4xl mb-8'>{data?.product?.name}</h1>
      <img
        className='object-cover h-[500px] rounded'
        src={itemURL}
        alt={data?.product?.name}
      />
      <div className='flex flex-col gap-4'>
        <p>{data?.product?.description}</p>
        <p className='item-info-price'>{itemPrice}</p>
      </div>
      <div className='flex flex-col gap-1 mb-2'>
        {itemInCart && (
          <p>
            In your{" "}
            <Link className='underline' to='/cart'>
              Shopping Cart
            </Link>
          </p>
        )}
        {lowStockDisplay}
        {outOfStockDisplay}
      </div>
      <div>
        <button
          className='grey-button py-2 px-3'
          disabled={buttonDisable}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );

  return loading ? <SkeletonItemFullPage /> : pageContent;
};

export default ItemFullPage;
