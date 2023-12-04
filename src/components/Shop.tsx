import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";

type ItemType = {
  name: string;
  price: number;
  description: string;
  dept: string;
  img: string;
  imgSmall: string;
  id: string;
};

type PropsType = {
  items: ItemType[];
};

const Shop = () => {
  const { collectionName } = useParams();
  const navigate = useNavigate();

  const [collectionTitle, setCollectionTitle] = useState<string>("");

  const items = !collectionName
    ? fullItemList
    : fullItemList.filter((item) => item.dept === collectionName);

  const capitalizeFirstLetter = (text: string): string => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    console.log(collectionName);
    if (!collectionName) {
      setCollectionTitle("Full Collection");
      return;
    }
    setCollectionTitle(capitalizeFirstLetter(collectionName));
  }, [collectionName]);

  useEffect(() => {
    if (collectionName && !items.length) navigate("/notfound");
  }, [collectionName]);

  const collectionsList = [
    "Full Collection",
    "Clothing",
    "Accessories",
    "Interior",
  ];
  const displayButtons = collectionsList.filter(
    (collection) => collection !== collectionTitle
  );

  return (
    <div className='shop-page'>
      <div className='shop-container'>
        <div className='shop-top'>
          <h1>{collectionTitle}</h1>
          <div className='shop-navbar'>
            {displayButtons.map((collection) => (
              <Link
                key={collection}
                to={
                  collection === "Full Collection"
                    ? "/shop"
                    : `/shop/${collection.toLowerCase()}`
                }
              >
                <button>{collection}</button>
              </Link>
            ))}
          </div>
        </div>
        <div className='shop-items'>
          {items?.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
