import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='font-quicksand'>
      <Navbar />
      <main className='min-h-screen h-full w-full flex'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
