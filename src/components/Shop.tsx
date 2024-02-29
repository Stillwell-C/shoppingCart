import { useEffect, useState } from "react";
import Item from "./Item";
import { Link, useParams } from "react-router-dom";
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

  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { dept: collectionName?.toUpperCase() },
  });

  const [collectionTitle, setCollectionTitle] = useState<string>("");

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
    <section className='mt-24 mb-32 mx-auto w-4/5 xl:w-[1024px] min-h-screen'>
      <div className='pt-12 mb-8 w-full flex flex-col items-center'>
        <h2 className='text-3xl mb-6 text-center'>{collectionTitle}</h2>
        <div className='flex flex-wrap smallMobile:flex-nowrap justify-center gap-2 sm:gap-5'>
          {displayButtons.map((collection) => (
            <Link
              key={collection}
              to={
                collection === "Full Collection"
                  ? "/shop"
                  : `/shop/${collection.toLowerCase()}`
              }
            >
              <button className='grey-button py-3 w-24 sm:min-w-36 rounded-xl'>
                <span className='text-sm sm:text-base'>{collection}</span>
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
        {error && <p>{"An error occurred. Please try again."}</p>}
      </div>
    </section>
  );
};

export default Shop;
