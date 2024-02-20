import { Link, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();

  return (
    <section className='mt-24 w-full flex flex-col items-center gap-3'>
      <div className='flex flex-col w-full items-center'>
        <h2 className='mt-12 text-4xl'>Success!</h2>
        <p className='text-2xl'>Your order has been recieved.</p>
      </div>
      <p className='text-lg'>Order No: {location?.state?.orderNumber}</p>
      <Link className='text-lg underline' to='/'>
        Return Home
      </Link>
    </section>
  );
};

export default OrderConfirmation;
