import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";

const Footer = () => {
  return (
    <footer className='w-full py-20 flex items-center justify-center bg-[#f1f1f1]'>
      <div className='w-4/5 lg:max-w-[900px]'>
        <div className='w-full flex flex-col gap-8 sm:flex-row justify-around'>
          <div className='max-w-80 shrink-0'>
            <EmailForm />
          </div>
          <div className='flex flex-col gap-4 w-full flex-wrap sm:flex-row justify-between lg:justify-around '>
            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold'>in hands</h3>
              <Link to='/about'>About us</Link>
              <Link to='/orders'>Orders</Link>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold'>Shop</h3>
              <Link to='/shop'>Full Collection</Link>
              <Link to='/shop/clothing'>Clothing</Link>
              <Link to='/shop/accessories'>Accessories</Link>
              <Link to='/shop/interior'>Interior</Link>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold'>Contact Us</h3>
              <a href='mailto: customersupport@inhands.com.md'>Email</a>
            </div>
          </div>
        </div>
        <div className='footer-bottom'></div>
      </div>
    </footer>
  );
};

export default Footer;
