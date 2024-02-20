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
    <div className='flex gap-2'>
      <img
        className='w-[140px] h-[200px] object-cover'
        src={itemURL}
        alt={item.Product.name}
      />
      <div className='h-full flex flex-col justify-end'>
        <p>{item.Product.name}</p>
        <p>Quantity: {item.qty}</p>
        <p>Subtotal: {subtotal}</p>
      </div>
    </div>
  );
};

export default OrderDisplayItem;
