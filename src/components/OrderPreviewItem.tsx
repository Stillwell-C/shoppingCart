import React from "react";
import { CartItemType } from "../context/ShoppingCartProvider";
import useFormatPrice from "../hooks/useFormatPrice";

type PropsType = {
  item: CartItemType;
};

const OrderPreviewItem = ({ item }: PropsType) => {
  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_150,c_fill/${item.img_id}`;

  const subtotal = useFormatPrice(item.qty * item.price);

  return (
    <div className='flex flex-col smallMobile:flex-row gap-2'>
      <img
        className='w-[140px] h-[200px] object-cover'
        src={itemURL}
        alt={item.name}
      />
      <div className='h-full flex flex-col smallMobile:self-end'>
        <p>{item.name}</p>
        <p>Quantity: {item.qty}</p>
        <p>Subtotal: {subtotal}</p>
      </div>
    </div>
  );
};

export default OrderPreviewItem;
