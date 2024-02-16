import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='body-wrapper'>
      <Navbar />
      <div className='body-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
