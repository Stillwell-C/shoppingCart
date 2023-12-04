import React from "react";
import { Link } from "react-router-dom";
import useFormatPrice from "../hooks/useFormatPrice";

type ItemType = {
  name: string;
  price: number;
  description: string;
  dept: string;
  img: string;
  imgSmall: string;
  id: string;
};

type PropsType = {
  item: ItemType;
};

const Item = ({ item }: PropsType) => {
  const itemPrice = useFormatPrice(item.price);

  return (
    <Link
      className='item-container'
      to={`/shop/fullcollection/${item.id.slice(-5)}`}
      key={item.id}
    >
      <img className='item-img' src={item.imgSmall} alt={item.name} />
      <div className='item-info-container'>
        <p>{item.name}</p>
        <p aria-label='item price'>{itemPrice}</p>
      </div>
    </Link>
  );
};

export default Item;
