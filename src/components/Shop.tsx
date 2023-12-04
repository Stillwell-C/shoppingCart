import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../../Data/FullItemList";

const Shop = () => {
  const items = fullItemList;

  return (
    <div className='shop-page'>
      <div className='shop-container'>
        <div className='shop-top'>
          <h1>Full Collection</h1>
          <div className='shop-navbar'>
            <Link to='clothing' aria-label='link to clothing page'>
              <button>Clothing</button>
            </Link>
            <Link to='accessories' aria-label='link to accessories page'>
              <button>Accessories</button>
            </Link>
            <Link to='interior' aria-label='link to interior page'>
              <button>Interior</button>
            </Link>
          </div>
        </div>
        <div className='shop-items'>
          {items.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
