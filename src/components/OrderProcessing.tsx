import React from "react";
import { BarLoader } from "react-spinners";

const OrderProcessing = () => {
  return (
    <div>
      <h2>Order Processing</h2>
      <p>Do not refresh page or close window.</p>
      <BarLoader height={6} />
    </div>
  );
};

export default OrderProcessing;
