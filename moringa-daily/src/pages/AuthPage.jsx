import React from "react";
import Auth from "../components/Auth";

const AuthPage = () => {
  return (
    <div>
      <div className='d-none d-md-flex w-full h-14 bg-default-gold flex justify-center align-center'>
        <h3 className='text-default-green my-auto'>
          <span className='uppercase font-semibold'>LATEST NEWS:</span> How
          Artificial Intelligence will impact the future workspace in tech
        </h3>
      </div>
      <Auth />
    </div>
  );
};

export default AuthPage;
