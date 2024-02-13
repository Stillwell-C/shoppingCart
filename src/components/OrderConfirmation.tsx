import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();

  return (
    <div className='redirect-div'>
      <h2>Success!</h2>
      <h2>Your order has been recieved.</h2>
      <p>Order No: {location?.state?.orderNumber}</p>
      <Link to='/'>Return Home</Link>
    </div>
  );
};

export default OrderConfirmation;
