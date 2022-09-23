import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='redirect-div'>
      <h1>Success!</h1>
      <h2>Your order has been recieved.</h2>
    </div>
  );
};

export default OrderConfirmation;
