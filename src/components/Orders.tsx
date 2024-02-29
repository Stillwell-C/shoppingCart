import { useLazyQuery } from "@apollo/client";
import React, { useRef, useState } from "react";
import { GET_ORDER } from "../queries/orderQueries";
import { BarLoader } from "react-spinners";
import OrderDisplay from "./OrderDisplay";

const Orders = () => {
  const [orderID, setOrderID] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const errorMsgRef = useRef<HTMLDivElement>(null);

  const [getOrder, { loading, error, data }] = useLazyQuery(GET_ORDER);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    if (!orderID.length) {
      setErrorMsg("Please input your Order No.");
      return;
    }
    getOrder({
      variables: { orderID },
    });
  };

  return (
    <section className='mt-24 mb-32 px-4 mx-auto w-11/12 sm:w-4/5 xl:w-[1024px] min-h-screen flex flex-col items-center justify-start gap-8'>
      <h2 className='mt-10 text-2xl font-semibold'>Orders</h2>
      <form
        className='w-full max-w-[350px] md:max-w-[500px] flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
        {(error || errorMsg) && (
          <div className='text-rose-600 font-semibold' ref={errorMsgRef}>
            {errorMsg && <p>{errorMsg}</p>}
            {error && <p>{error.message}</p>}
          </div>
        )}

        <label htmlFor='orderNo' className='flex w-full flex-col'>
          Order No:
          <input
            className='w-full rounded border border-solid border-[#c1c0c0] ml-1'
            id='orderNo'
            type='text'
            name='orderNo'
            autoComplete='off'
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
            maxLength={150}
            required
          />
        </label>
        <div>
          <button type='submit' className='grey-button'>
            Search
          </button>
        </div>
        <div className='-mt-2'>
          {loading && <BarLoader width={150} height={6} />}
        </div>
        {!loading && data?.order && <OrderDisplay order={data.order} />}
      </form>
    </section>
  );
};

export default Orders;
