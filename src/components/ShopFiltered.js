import React from "react";
import Item from "./Item";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import NotFound from "./NotFound";

const Shop = ({ itemList, setShoppingCart, shoppingCart }) => {
  const { collectionName } = useParams();
  const collectionsList = ["clothing", "accessories", "interior"];
  const displayPage = collectionsList.includes(collectionName) ? true : false;
  const displayButtons = collectionsList.filter(
    (collection) => collection !== collectionName
  );
  const items = itemList.filter((item) => item.type === collectionName);
  const capitalizeFirstLetter = (name) => {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  };

  return (
    <>
      {displayPage && (
        <div className='shop-page'>
          <div className='shop-container'>
            <div className='shop-top'>
              <h1>{capitalizeFirstLetter(collectionName)}</h1>
              <div className='shop-navbar'>
                <Link to='/shop' aria-label='link to full collection'>
                  <button>Full Collection</button>
                </Link>
                {displayButtons.map((button) => (
                  <Link
                    to={`/shop/${button}`}
                    key={collectionsList.indexOf(button)}
                    aria-label={`link to ${button} page`}
                  >
                    <button>{capitalizeFirstLetter(button)}</button>
                  </Link>
                ))}
              </div>
            </div>
            <div className='shop-items'>
              {items.map((item) => (
                <Item
                  itemName={item.name}
                  itemImg={item.img}
                  itemImgSmall={item.imgSmall}
                  itemPrice={item.price}
                  itemDescription={item.description}
                  key={item.serial}
                  setShoppingCart={setShoppingCart}
                  shoppingCart={shoppingCart}
                />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
      {!displayPage && <NotFound />}
    </>
  );
};

export default Shop;
