import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import NotFound from "./NotFound";

const ItemFullPage = ({ shoppingCart, setShoppingCart, itemList }) => {
  const { itemName } = useParams();
  const [currentItem] = itemList.filter((item) => item.name === itemName);
  let displayItem = true;
  if (!currentItem) {
    displayItem = false;
  }

  const handleAddToCart = () => {
    const currentShoppingCart = [...shoppingCart];
    let updatedShoppingCart;
    let matches = currentShoppingCart.filter(
      (item) => item.name === currentItem.name
    );
    if (matches.length > 0) {
      const itemIndex = currentShoppingCart.findIndex(
        (obj) => obj.name === currentItem.name
      );
      updatedShoppingCart = [...currentShoppingCart];
      updatedShoppingCart[itemIndex].quantity += 1;
      setShoppingCart(updatedShoppingCart);
      return;
    }

    updatedShoppingCart = [
      ...currentShoppingCart,
      {
        name: currentItem.name,
        price: currentItem.price,
        quantity: 1,
        serial: currentItem.serial,
        imgSmall: currentItem.imgSmall,
      },
    ];
    setShoppingCart(updatedShoppingCart);
  };

  return (
    <>
      {displayItem && (
        <div className='item-full-page'>
          <div className='item-full-container'>
            <h1 className='item-full-title'>{currentItem.name}</h1>
            <img
              className='item-img-medium'
              src={currentItem.img}
              alt={currentItem.name}
            />
            <p>{currentItem.description}</p>
            <p>L {currentItem.price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
          <Footer />
        </div>
      )}
      {!displayItem && <NotFound />}
    </>
  );
};

export default ItemFullPage;
