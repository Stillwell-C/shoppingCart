import React from "react";

const SkeletonItemFullPage = () => {
  return (
    <div className='mt-32 mb-32 mx-auto min-h-screen flex flex-col animate-pulse'>
      <div className='h-10 w-32 mb-8 bg-gray-300 self-center'></div>
      <div className='cover w-[350px] h-[500px] rounded bg-gray-300'></div>
      <div className='flex flex-col mt-4 mb-2 gap-1'>
        <div className='h-4 w-36 bg-gray-300 mb-1'></div>
        <div className='h-4 w-28 bg-gray-300'></div>
      </div>
      <div>
        <button className='grey-button py-2 px-3' disabled={true}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SkeletonItemFullPage;
