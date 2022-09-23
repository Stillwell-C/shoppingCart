import React from "react";
import { Link } from "react-router-dom";

const Item = ({ itemName, itemImgSmall, itemPrice }) => {
  return (
    <Link className='item-container' to={`/shop/fullcollection/${itemName}`}>
      <img className='item-img' src={itemImgSmall} alt={itemName} />
      <div className='item-info-container'>
        <p>{itemName}</p>
        <p>L {itemPrice}</p>
      </div>
    </Link>
  );
};

export default Item;
