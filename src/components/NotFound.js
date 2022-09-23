import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default NotFound;
