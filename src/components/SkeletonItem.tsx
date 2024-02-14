import React from "react";

const SkeletonItem = () => {
  return (
    <div className='item-container'>
      <div className='item-img skeleton-background'></div>
      <div className='item-info-container'>
        <div className='skeleton-text-line skeleton-background'></div>
        <div className='skeleton-text-line skeleton-background'></div>
      </div>
    </div>
  );
};

export default SkeletonItem;
