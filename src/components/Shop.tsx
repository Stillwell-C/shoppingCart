import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import fullItemList from "../Data/FullItemList";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../queries/productQueries";
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

  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { dept: collectionName?.toUpperCase() },
  });

  useEffect(() => {
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
    <div className='mt-24 mb-32 mx-auto w-4/5 xl:w-[1024px] min-h-screen'>
      <div className='pt-12 mb-8 w-full flex flex-col items-center'>
        <h2 className='text-3xl mb-6'>{collectionTitle}</h2>
        <div className='flex gap-5'>
          {displayButtons.map((collection) => (
            <Link
              key={collection}
              to={
                collection === "Full Collection"
                  ? "/shop"
                  : `/shop/${collection.toLowerCase()}`
              }
            >
              <button className='grey-button py-3 min-w-36 rounded-xl'>
                {collection}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex justify-center flex-wrap gap-6'>
        {!loading &&
          !error &&
          data.products?.map((item: ItemType) => (
            <Item item={item} key={item.searchName} />
          ))}
        {loading && skeletonProducts}
      </div>
    </div>
  );
};

export default Shop;
