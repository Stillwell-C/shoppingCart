import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
            <Link to='/shop'>
              <img src='/img/front-shop.jpg' alt='link to full collection' />
              <h3>Full Collection</h3>
            </Link>
            <Link to='/shop/clothing'>
              <img src='/img/front-clothing.jpg' alt='link to clothing' />
              <h3>Clothing</h3>
            </Link>
            <Link to='/shop/accessories'>
              <img src='/img/front-accessories.jpg' alt='link to accessories' />
              <h3>Accessories</h3>
            </Link>
            <Link to='/shop/interior'>
              <img
                src='/img/front-interior.jpg'
                alt='link to interior products'
              />
              <h3>Interior</h3>
            </Link>
          </div>
        </div>
        <div className='home-bottom-middle'>
          <div className='home-bm-top'>
            <img src='/img/person-front.jpg' alt='link to clothing' />
            <div>
              <h2>Find Your New Self</h2>
              <p>
                It's time for the new you. Our timeless pieces help you define
                yourself and show the world what you're truely made of.
              </p>
              <Link to='/shop'>
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
              <Link to='/shop/interior'>
                <button>Shop Interior</button>
              </Link>
            </div>
            <img src='/img/interior-front.jpg' alt='link to interior' />
          </div>
        </div>
        <div className='home-bottom-bottom'>
          <h2>Why in hands?</h2>
          <div className='why-hands'>
            <div>
              <img src='/img/front-crafted.jpg' alt='hand crafted products' />
              <h2>Hand Crafted</h2>
              <p>
                Each and every one of our pieces is handcrafted by a team of
                local artisans that is personally trained and supervised by our
                founder.
              </p>
            </div>
            <div>
              <img
                src='/img/front-sustain.jpg'
                alt='sustainable production methods'
              />
              <h2>Sustainable Production</h2>
              <p>
                We ship all products in 100% biodegradable packaging and our
                small size allows us to minimize waste in the production
                process.
              </p>
            </div>
            <div>
              <img src='/img/front-passion.jpg' alt='made with passion' />
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
