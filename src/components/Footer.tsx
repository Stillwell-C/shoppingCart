import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-header'>
            <h1>Get Updates from in hands</h1>
            <p>
              Get information on discounts and sales delivered straight to your
              inbox
            </p>
            <EmailForm />
          </div>
          <div>
            <h1>in hands</h1>
            <Link to='/about'>About us</Link>
            <Link to='/orders'>Orders</Link>
          </div>
          <div>
            <h1>Shop</h1>
            <Link to='/shop'>Full Collection</Link>
            <Link to='/shop/clothing'>Clothing</Link>
            <Link to='/shop/accessories'>Accessories</Link>
            <Link to='/shop/interior'>Interior</Link>
          </div>
          <div>
            <h1>Contact Us</h1>
            <p>customersupport@inhands.com.md</p>
          </div>
        </div>
        <div className='footer-bottom'></div>
      </div>
    </footer>
  );
};

export default Footer;
