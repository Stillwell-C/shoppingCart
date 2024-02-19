import React from "react";
import { Link } from "react-router-dom";
import useFormatPrice from "../hooks/useFormatPrice";

type ItemType = {
  name: string;
  searchName: string;
  price: number;
  img_id: string;
};

type PropsType = {
  item: ItemType;
};

const Item = ({ item }: PropsType) => {
  const itemPrice = useFormatPrice(item.price);

  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_500,c_fill/${item?.img_id}`;

  return (
    <Link
      className='w-72 h-[450px] shadow-lg rounded-lg flex flex-col justify-center items-center transition-all ease-in-out hover:scale-[1.01]'
      to={`/shop/fullcollection/${item.searchName}`}
    >
      <img
        className='h-[300px] w-[210px] object-cover rounded'
        src={itemURL}
        alt={item.name}
      />
      <div className='w-[200px] mt-3'>
        <p>{item.name}</p>
        <p aria-label='item price'>{itemPrice}</p>
      </div>
    </Link>
  );
};

export default Item;
