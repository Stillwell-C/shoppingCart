import { CartItemType } from "../context/ShoppingCartProvider";
import OrderPreviewItem from "./OrderPreviewItem";

type PropsType = {
  cart: CartItemType[];
  itemTotal: number;
  priceTotal: number;
};

const OrderPreview = ({ cart, itemTotal, priceTotal }: PropsType) => {
  return (
    <div className='order-preview-container'>
      <div className='order-preview-items'>
        {cart.map((item) => (
          <OrderPreviewItem key={item.searchName} item={item} />
        ))}
      </div>
      <p>Total Items: {itemTotal}</p>
      <p>Total: {priceTotal}</p>
    </div>
  );
};

export default OrderPreview;
