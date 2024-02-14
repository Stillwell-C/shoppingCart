import React from "react";

const SkeletonItemFullPage = () => {
  return (
    <div className='item-full-container'>
      <div className='item-full-title skeleton-item-title skeleton-background'></div>
      <div className='item-img-medium skeleton-background skeleton-item-img'></div>
      <div className='skeleton-item-information'>
        <div className='skeleton-text-line skeleton-background'></div>
        <div className='skeleton-text-line skeleton-background'></div>
      </div>
      <div>
        <button disabled={true}>Add to cart</button>
      </div>
    </div>
  );
};

export default SkeletonItemFullPage;
