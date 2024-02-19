import { Link, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();

  return (
    <div className='mt-24 w-full flex flex-col items-center gap-3'>
      <div className='flex flex-col w-full items-center'>
        <h2 className='mt-12 text-4xl mb-1'>Success!</h2>
        <p className='text-2xl'>Your order has been recieved.</p>
      </div>
      <p className='text-lg'>Order No: {location?.state?.orderNumber}</p>
      <Link to='/'>Return Home</Link>
    </div>
  );
};

export default OrderConfirmation;
