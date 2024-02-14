import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderCancelConfirmation = () => {
  const location = useLocation();

  return (
    <div className='order-preview-container'>
      <h3>Success</h3>
      <p>Order No.: {location.state.orderID} has been canceled.</p>
      <Link to='/'>Return Home</Link>
    </div>
  );
};

export default OrderCancelConfirmation;
