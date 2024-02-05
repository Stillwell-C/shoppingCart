import React from "react";
import { Link } from "react-router-dom";
import useFormatPrice from "../hooks/useFormatPrice";

type ItemType = {
  name: string;
  searchName: string;
  price: number;
  description: string;
  dept: string;
  img_id: string;
  SKU: string;
};

type PropsType = {
  item: ItemType;
};

const Item = ({ item }: PropsType) => {
  const itemPrice = useFormatPrice(item.price);

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_500,c_fill/${item?.img_id}`;

  return (
    <Link
      className='item-container'
      to={`/shop/fullcollection/${item.searchName}`}
      key={item.SKU}
    >
      <img className='item-img' src={itemURL} alt={item.name} />
      <div className='item-info-container'>
        <p>{item.name}</p>
        <p aria-label='item price'>{itemPrice}</p>
      </div>
    </Link>
  );
};

export default Item;
