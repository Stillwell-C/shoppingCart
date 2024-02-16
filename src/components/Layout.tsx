import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='font-quicksand'>
      <Navbar />
      <div className='body-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
