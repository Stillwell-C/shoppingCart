import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderCancelConfirmation = () => {
  const location = useLocation();

  return (
    <section className='mt-32  mx-auto w-4/5 xl:w-[1024px] min-h-screen flex flex-col items-center'>
      <h3 className='text-3xl mb-4'>Success!</h3>
      <p className='text-lg'>
        Order: {location.state.orderID} has been canceled.
      </p>
      <Link className='underline text-lg' to='/'>
        Return Home
      </Link>
    </section>
  );
};

export default OrderCancelConfirmation;
