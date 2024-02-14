import useFormatPrice from "../hooks/useFormatPrice";

type PropsType = {
  item: {
    searchName: string;
    qty: number;
    price: number;
    Product: {
      name: string;
      img_id: string;
    };
  };
};

const OrderDisplayItem = ({ item }: PropsType) => {
  const itemURL = `https://res.cloudinary.com/danscxcd2/image/upload/w_150,c_fill/${item.Product.img_id}`;

  const subtotal = useFormatPrice(item.qty * item.price);

  return (
    <div>
      <img src={itemURL} alt={item.Product.name} />
      <div className='order-preview-info'>
        <p>{item.Product.name}</p>
        <p>Quantity: {item.qty}</p>
        <p>Subtotal: {subtotal}</p>
      </div>
    </div>
  );
};

export default OrderDisplayItem;
