import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mt-24 w-full flex flex-col items-center gap-3'>
      <div className='flex flex-col w-full items-center'>
        <h2 className='mt-12 text-4xl mb-1'>Error.</h2>
        <p className='text-2xl'>Page not found.</p>
      </div>
      <p className='text-xl'>Redirecting...</p>
      <BarLoader width={175} height={6} />
    </div>
  );
};

export default NotFound;
