import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import fullCollectionImg from "../assets/front-shop.jpg";
import clothingImg from "../assets/front-clothing.jpg";
import accessoriesImg from "../assets/front-accessories.jpg";
import interiorImg from "../assets/front-interior.jpg";
import frontSelfImg from "../assets/person-front.jpg";
import frontInteriorImg from "../assets/interior-front.jpg";
import handCraftImg from "../assets/front-crafted.jpg";
import sustainableImg from "../assets/front-sustain.jpg";
import passionImg from "../assets/front-passion.jpg";

const Home = () => {
  return (
    <div className='w-full bg-home-background bg-fixed bg-no-repeat bg-cover'>
      <div className='mt-[45vh] mb-[45vh] ml-[45vw] text-white'>
        <p className='text-5xl font-semibold '>Revolutionary Designs</p>
        <p className='text-3xl'>Find your new aesthetic today</p>
        <Link to='/shop' aria-label='move to shop page'>
          <button className='cursor-pointer mt-3 py-2 px-5 bg-white text-3xl border border-solid border-white rounded-lg text-black hover:text-white hover:bg-[rgba(0,0,0,0.2)] '>
            Shop now
          </button>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center bg-white'>
        <div className='max-w-5xl'>
          <div>
            <h2 className='text-4xl my-8'>Featured Collections</h2>
            <div className='flex justify-center items-center gap-6 mb-12'>
              <Link
                to='/shop'
                aria-label='move to full collection page'
                className='text-2xl transition-all ease-in-out hover:scale-[1.02]'
              >
                <img
                  className='w-64 mb-4 shadow-md rounded-sm'
                  src={fullCollectionImg}
                  alt=''
                />
                <span>Full Collection</span>
              </Link>
              <Link
                to='/shop/clothing'
                aria-label='move to clothing page'
                className='text-2xl transition-all ease-in-out hover:scale-[1.02]'
              >
                <img
                  className='w-64 mb-4 shadow-md rounded-sm'
                  src={clothingImg}
                  alt=''
                />
                <span>Clothing</span>
              </Link>
              <Link
                to='/shop/accessories'
                aria-label='move to accessories page'
                className='text-2xl transition-all ease-in-out hover:scale-[1.02]'
              >
                <img
                  className='w-64 mb-4 shadow-md rounded-sm'
                  src={accessoriesImg}
                  alt=''
                />
                <span>Accessories</span>
              </Link>
              <Link
                to='/shop/interior'
                aria-label='move to interior collection page'
                className='text-2xl transition-all ease-in-out hover:scale-[1.02]'
              >
                <img
                  className='w-64 mb-4 shadow-md rounded-sm'
                  src={interiorImg}
                  alt=''
                />
                <span>Interior</span>
              </Link>
            </div>
          </div>
          <div>
            <div className='flex my-12 gap-12'>
              <img className='w-1/2 rounded-sm' src={frontSelfImg} alt='' />
              <div className='min-h-full flex flex-col justify-center'>
                <h2 className='text-3xl'>Find Your New Self</h2>
                <p>
                  It's time for the new you. Our timeless pieces help you define
                  yourself and show the world what you're truely made of.
                </p>
                <Link to='/shop' aria-label='move to full collection page'>
                  <button className='grey-button py-4 px-6 mt-4 rounded-lg'>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex my-12 gap-12'>
              <div className='min-h-full flex flex-col justify-center'>
                <h2 className='text-3xl'>New Interior. New You.</h2>
                <p>
                  Interior design should be a top priority. Our unique interior
                  designs help bring the room together so you can work, sleep,
                  and rest easier.
                </p>
                <Link
                  to='/shop/interior'
                  aria-label='move to interior collection page'
                >
                  <button className='grey-button py-4 px-6 mt-4 rounded-lg'>
                    Shop Interior
                  </button>
                </Link>
              </div>
              <img className='w-1/2 rounded-sm' src={frontInteriorImg} alt='' />
            </div>
          </div>
          <div className='mt-32'>
            <h2 className='text-6xl text-center mb-16'>Why in hands?</h2>
            <div className='why-hands flex gap-4 justify-center mb-12'>
              <div className='flex flex-col items-center'>
                <img
                  className='w-[300px] h-[300px] rounded-full overflow-hidden object-cover'
                  src={handCraftImg}
                  alt=''
                />
                <h3 className='mt-6 text-2xl'>Hand Crafted</h3>
                <p>
                  Each and every one of our pieces is handcrafted by a team of
                  local artisans that is personally trained and supervised by
                  our founder.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <img
                  className='w-[300px] h-[300px] rounded-full overflow-hidden object-cover'
                  src={sustainableImg}
                  alt=''
                />
                <h3 className='mt-6 text-2xl'>Sustainable Production</h3>
                <p>
                  We ship all products in 100% biodegradable packaging and our
                  small size allows us to minimize waste in the production
                  process.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <img
                  className='w-[300px] h-[300px] rounded-full overflow-hidden object-cover'
                  src={passionImg}
                  alt=''
                />
                <h3 className='mt-6 text-2xl'>Built with Passion</h3>
                <p>
                  Our brand was started by a small team who share your
                  enthusiasm for fashion. We offer a generous return policy if
                  you are not fully satisfied with your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
