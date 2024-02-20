import { BarLoader } from "react-spinners";

const OrderProcessing = () => {
  return (
    <section className='mt-24 mb-32 mx-auto w-4/5 xl:w-[1024px] min-h-screen flex flex-col items-center'>
      <h2 className='mt-10 text-3xl'>Order Processing</h2>
      <p className='text-xl mb-2'>Do not refresh page or close window.</p>
      <BarLoader height={6} width={150} />
    </section>
  );
};

export default OrderProcessing;
