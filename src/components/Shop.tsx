import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";
import { useQuery } from "@apollo/client";
import { GET_ITEMS_BY_DEPT } from "../queries/productQueries";
import SkeletonItem from "./SkeletonItem";

type ItemType = {
  name: string;
  searchName: string;
  price: number;
  img_id: string;
};

const Shop = () => {
  const { collectionName } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ITEMS_BY_DEPT, {
    variables: { dept: collectionName?.toUpperCase() },
  });

  useEffect(() => {
    if (!loading) console.log(data);
    if (error) console.log("error: ", JSON.stringify(error, null, 2));
  }, [data, error]);

  const [collectionTitle, setCollectionTitle] = useState<string>("");

  const items = !collectionName
    ? fullItemList
    : fullItemList.filter((item) => item.dept === collectionName);

  const capitalizeFirstLetter = (text: string): string => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
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

  const skeletonProducts = [...new Array(9)].map((element, i) => (
    <SkeletonItem key={i} />
  ));

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
          {!loading &&
            !error &&
            data.getProductsByDept?.map((item: ItemType) => (
              <Item item={item} key={item.searchName} />
            ))}
          {loading && skeletonProducts}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
