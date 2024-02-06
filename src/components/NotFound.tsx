import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import { BarLoader } from "react-spinners";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='redirect-div'>
      <h1>Error. Could not find page.</h1>
      <h2>Redirecting...</h2>
      <BarLoader height={6} />
      <Footer />
    </div>
  );
};

export default NotFound;
