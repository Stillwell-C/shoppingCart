import React, { useEffect } from "react";
import OrderDisplayItem from "./OrderDisplayItem";
import { useMutation } from "@apollo/client";
import { DELETE_ORDER } from "../mutations/orderMutations";
import { BarLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import useFormatPrice from "../hooks/useFormatPrice";

type PropsType = {
  order: {
    id: string;
    createdAt: string;
    orderStatus: string;
    orderTotal: number;
    orderItems: {
      searchName: string;
      qty: number;
      price: number;
      Product: {
        name: string;
        img_id: string;
      };
    }[];
  };
};

const OrderDisplay = ({ order }: PropsType) => {
  const navigate = useNavigate();

  const [deleteOrder, { data, loading, error }] = useMutation(DELETE_ORDER);

  useEffect(() => {
    if (data?.deleteOrder?.id) {
      navigate("/orders/cancelconfirmation", {
        state: { orderID: data.deleteOrder.id },
      });
    }
  }, [data]);

  const itemTotal = order.orderItems.reduce(
    (previous, current) => previous + current.qty,
    0
  );

  const disableToggle =
    order.orderStatus === "SHIPPED" || order.orderStatus === "COMPLETED";

  const parsedDate = new Date(parseInt(order.createdAt));
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: undefined,
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = parsedDate.toLocaleDateString("en-US", dateOptions);

  const formattedTotal = useFormatPrice(order.orderTotal);

  return (
    <div className='w-full flex flex-col items-start gap-4'>
      {error && (
        <div>
          <h3>An error occurred</h3>
          <p>{error.message || "Please try again"}</p>
        </div>
      )}
      <div className='flex flex-col gap-4'>
        {order.orderItems.map((item) => (
          <OrderDisplayItem key={item.searchName} item={item} />
        ))}
      </div>
      <div>
        <p>Order Date: {formattedDate}</p>
        <p>Order Status: {order.orderStatus}</p>
        <p>Total Items: {itemTotal}</p>
        <p className='font-semibold'>Total: {formattedTotal}</p>
      </div>
      {!loading && (
        <button
          className='grey-button'
          disabled={disableToggle}
          onClick={() => deleteOrder({ variables: { id: order?.id } })}
        >
          Cancel Order
        </button>
      )}
      {loading && <BarLoader height={6} />}
    </div>
  );
};

export default OrderDisplay;
