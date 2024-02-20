import { CartItemType } from "../context/ShoppingCartProvider";
import OrderPreviewItem from "./OrderPreviewItem";

type PropsType = {
  cart: CartItemType[];
};

const OrderPreview = ({ cart }: PropsType) => {
  return (
    <div className='mb-4'>
      <div className='flex flex-col gap-4'>
        {cart.map((item) => (
          <OrderPreviewItem key={item.searchName} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderPreview;
