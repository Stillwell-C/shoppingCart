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
    <div className='home-container'>
      <div className='top-home-text'>
        <h1>Revolutionary Designs</h1>
        <h2>Find your new aesthetic today</h2>
        <Link to='/shop'>
          <button>Shop now</button>
        </Link>
      </div>
      <div className='home-bottom'>
        <div className='home-shop-links'>
          <h1>Featured Collections</h1>
          <div className='home-shop-navlinks'>
            <Link to='/shop' aria-label='move to full collection page'>
              <img src={fullCollectionImg} alt='' />
              <span>Full Collection</span>
            </Link>
            <Link to='/shop/clothing' aria-label='move to clothing page'>
              <img src={clothingImg} alt='' />
              <span>Clothing</span>
            </Link>
            <Link to='/shop/accessories' aria-label='move to accessories page'>
              <img src={accessoriesImg} alt='' />
              <span>Accessories</span>
            </Link>
            <Link
              to='/shop/interior'
              aria-label='move to interior collection page'
            >
              <img src={interiorImg} alt='' />
              <span>Interior</span>
            </Link>
          </div>
        </div>
        <div className='home-bottom-middle'>
          <div className='home-bm-top'>
            <img src={frontSelfImg} alt='' />
            <div>
              <h2>Find Your New Self</h2>
              <p>
                It's time for the new you. Our timeless pieces help you define
                yourself and show the world what you're truely made of.
              </p>
              <Link to='/shop' aria-label='move to full collection page'>
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='home-bm-bottom'>
            <div>
              <h2>New Interior. New You.</h2>
              <p>
                Interior design should be a top priority. Our unique interior
                designs help bring the room together so you can work, sleep, and
                rest easier.
              </p>
              <Link
                to='/shop/interior'
                aria-label='move to interior collection page'
              >
                <button>Shop Interior</button>
              </Link>
            </div>
            <img src={frontInteriorImg} alt='' />
          </div>
        </div>
        <div className='home-bottom-bottom'>
          <h2>Why in hands?</h2>
          <div className='why-hands'>
            <div>
              <img src={handCraftImg} alt='' />
              <h2>Hand Crafted</h2>
              <p>
                Each and every one of our pieces is handcrafted by a team of
                local artisans that is personally trained and supervised by our
                founder.
              </p>
            </div>
            <div>
              <img src={sustainableImg} alt='' />
              <h2>Sustainable Production</h2>
              <p>
                We ship all products in 100% biodegradable packaging and our
                small size allows us to minimize waste in the production
                process.
              </p>
            </div>
            <div>
              <img src={passionImg} alt='' />
              <h2>Built with Passion</h2>
              <p>
                Our brand was started by a small team who share your enthusiasm
                for fashion. We offer a generous return policy if you are not
                fully satisfied with your order.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
