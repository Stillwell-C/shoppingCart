import { Link } from "react-router-dom";
import homeBackground from "../assets/home-background.jpg";
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
    <section className='w-full'>
      <div className='w-full bg-black -z-10 fixed top-0 left-0'>
        <img
          src={homeBackground}
          className='h-screen w-auto object-cover object-center mx-auto'
          alt=''
        />
      </div>
      <div className='min-h-screen text-white'>
        <div className='absolute max-md:bottom-[10%] md:top-1/2 max-md:left-4 md:right-4'>
          <p className='text-3xl smallMobile:text-4xl sm:text-5xl font-semibold '>
            Revolutionary Designs
          </p>
          <p className='text-2xl sm:text-3xl'>Find your new aesthetic today</p>
          <Link to='/shop' aria-label='move to shop page'>
            <button className='cursor-pointer mt-3 py-2 px-5 bg-white text-3xl border border-solid border-white rounded-lg text-black hover:text-white hover:bg-[rgba(0,0,0,0.2)] '>
              Shop now
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center bg-white px-8'>
        <div className='max-w-5xl'>
          <div>
            <h2 className='text-4xl my-8 text-center md:text-start'>
              Featured Collections
            </h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 mb-12'>
              <div className='flex flex-col smallMobile:flex-row justify-center items-start gap-6'>
                <Link
                  to='/shop'
                  aria-label='move to full collection page'
                  className='text-2xl transition-all ease-in-out hover:scale-[1.02]'
                >
                  <img
                    className=' min-w-32 w-40 md:w-full xl:w-64 mb-4 shadow-md rounded-sm'
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
                    className=' min-w-32 w-40 md:w-full xl:w-64 mb-4 shadow-md rounded-sm'
                    src={clothingImg}
                    alt=''
                  />
                  <span>Clothing</span>
                </Link>
              </div>
              <div className='flex flex-col smallMobile:flex-row justify-center items-start gap-6'>
                <Link
                  to='/shop/accessories'
                  aria-label='move to accessories page'
                  className='text-2xl transition-all ease-in-out hover:scale-[1.02]'
                >
                  <img
                    className=' min-w-32 w-40 md:w-full xl:w-64 mb-4 shadow-md rounded-sm'
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
                    className=' min-w-32 w-40 md:w-full xl:w-64 mb-4 shadow-md rounded-sm'
                    src={interiorImg}
                    alt=''
                  />
                  <span>Interior</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='max-w-[350px] md:max-w-full flex flex-col md:flex-row my-12 gap-4 md:gap-12 items-center'>
              <img className='md:w-1/2 rounded-sm' src={frontSelfImg} alt='' />
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
            <div className='max-w-[350px] md:max-w-full flex flex-col-reverse md:flex-row my-12 gap-4 md:gap-12 items-center'>
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
              <img
                className='md:w-1/2 rounded-sm'
                src={frontInteriorImg}
                alt=''
              />
            </div>
          </div>
          <div className='mt-32'>
            <h2 className='text-6xl text-center mb-16'>Why in hands?</h2>
            <div className='flex flex-col items-center md:items-start md:justify-center md:flex-row gap-12 mb-12'>
              <div className='flex flex-col items-center max-w-[300px]'>
                <img
                  className='w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden object-cover'
                  src={handCraftImg}
                  alt=''
                />
                <h3 className='mt-6 text-2xl text-center'>Hand Crafted</h3>
                <p>
                  Each and every one of our pieces is handcrafted by a team of
                  local artisans that is personally trained and supervised by
                  our founder.
                </p>
              </div>
              <div className='flex flex-col items-center max-w-[300px]'>
                <img
                  className='w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden object-cover'
                  src={sustainableImg}
                  alt=''
                />
                <h3 className='mt-6 text-2xl text-center'>
                  Sustainable Production
                </h3>
                <p>
                  We ship all products in 100% biodegradable packaging and our
                  small size allows us to minimize waste in the production
                  process.
                </p>
              </div>
              <div className='flex flex-col items-center max-w-[300px]'>
                <img
                  className='w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden object-cover'
                  src={passionImg}
                  alt=''
                />
                <h3 className='mt-6 text-2xl text-center'>
                  Built with Passion
                </h3>
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
    </section>
  );
};

export default Home;
