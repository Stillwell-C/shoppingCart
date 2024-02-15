import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (data) console.log(data);
    if (error) console.log("error: ", JSON.stringify(error, null, 2));
  }, [data, error]);

  return (
    <div className='orders-container'>
      <h2>Orders</h2>
      <form className='orders-form' onSubmit={handleSubmit}>
        {(error || errorMsg) && (
          <div ref={errorMsgRef}>
            {errorMsg && <p>{errorMsg}</p>}
            {error && <p>{error.message}</p>}
          </div>
        )}

        <label htmlFor='orderNo'>
          Order No:
          <input
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
          <button type='submit'>Search</button>
        </div>
        {loading && <BarLoader height={6} />}
        {!loading && data?.order && <OrderDisplay order={data.order} />}
      </form>
    </div>
  );
};

export default Orders;
