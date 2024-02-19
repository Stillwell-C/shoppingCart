import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";

const Footer = () => {
  return (
    <footer className='w-full py-20 flex flex-col items-center justify-center bg-gray-200'>
      <div className='w-4/5 xl:w-[1024px]'>
        <div className='w-full flex justify-around'>
          <div className='max-w-80 '>
            <EmailForm />
          </div>
          <div className='flex flex-col gap-4'>
            <h2>in hands</h2>
            <Link to='/about'>About us</Link>
            <Link to='/orders'>Orders</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <h2>Shop</h2>
            <Link to='/shop'>Full Collection</Link>
            <Link to='/shop/clothing'>Clothing</Link>
            <Link to='/shop/accessories'>Accessories</Link>
            <Link to='/shop/interior'>Interior</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <h2>Contact Us</h2>
            <a href='mailto: customersupport@inhands.com.md'>Email</a>
          </div>
        </div>
        <div className='footer-bottom'></div>
      </div>
    </footer>
  );
};

export default Footer;
