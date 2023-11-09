import React from "react";

const TopBar = ({ isCollapsed, setIsCollapsed }) => {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className='bg-default-gold sticky top-0 z-30 shadow-sm flex justify-between md:items-center px-4 py-2 big-screen-top'>
      <div className='w-full flex justify-between items-center'>
        <h6 className='text-xl text-default-green my-auto'>
          <span className='font-semibold'>Dashboard:</span> Administrator
          Account
        </h6>
        <div className='flex items-center gap-4'>
          <div className='bg-yellow-200 w-6 h-6 rounded-full flex justify-center items-center text-default-green cursor-pointer relative'>
            <i className='fa fa-bell text-sm' aria-hidden='true'></i>
            <span className='w-4 h-4 rounded-full text-sm bg-red-500 text-white flex justify-center items-center absolute notification-badge'>
              0
            </span>
          </div>
          <div className='bg-yellow-200 w-6 h-6 rounded-sm flex justify-center items-center'>
            <i
              className='fa fa-bars text-md text-default-green cursor-pointer'
              aria-hidden='true'
              onClick={toggleSidebar}
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
