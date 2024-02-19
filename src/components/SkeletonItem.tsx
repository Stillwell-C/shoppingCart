import React from "react";

const SkeletonItem = () => {
  return (
    <div className='w-72 h-[450px] shadow-lg rounded-lg flex flex-col justify-center items-center transition-all ease-in-out hover:scale-[1.01] animate-pulse'>
      <div className='h-[300px] w-[210px] rounded bg-gray-300'></div>
      <div className='w-[200px] mt-3'>
        <div className='h-4 w-20 bg-gray-300 mb-1'></div>
        <div className='h-4 w-32 bg-gray-300'></div>
      </div>
    </div>
  );
};

export default SkeletonItem;
