import React from "react";

const TopBar = ({ isCollapsed, setIsCollapsed }) => {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className='h-16 bg-default-gold sticky top-0 z-30 shadow-sm flex justify-between md:items-center px-4 py-4'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <h6 className='flex items-center gap-2 text-xl text-white my-auto bg-amber-800 rounded py-1 px-3'>
            Admin <span className='d-none d-md-block'>Account</span>
          </h6>
          <h6 className='text-xl text-default-green font-semibold uppercase my-auto d-md-none'>
            Dashboard
          </h6>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-yellow-200 w-6 h-6 rounded-full flex justify-center items-center text-default-green cursor-pointer relative'>
            <i className='fa fa-bell text-sm' aria-hidden='true'></i>
            <span className='w-4 h-4 rounded-full text-sm bg-red-500 text-white flex justify-center items-center absolute notification-badge'>
              0
            </span>
          </div>
          <div className='d-none d-md-block bg-yellow-200 w-6 h-6 rounded-sm flex justify-center items-center'>
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
