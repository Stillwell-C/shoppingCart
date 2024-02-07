import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

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
      <BarLoader height={6} />
    </div>
  );
};

export default OrderConfirmation;
