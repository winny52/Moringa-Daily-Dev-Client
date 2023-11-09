import React from "react";

const ProfileSection = () => {
  return (
    <div className='w-full'>
      <div className='card p-3 flex gap-3 items-center'>
        <i className='fa fa-cogs text-3xl' aria-hidden='true'></i>
        <div className=''>
          <h6 className='text-default-green font-semibold text-xl'>
            Profile Setting
          </h6>
          <p className='text-sm text-gray-600 my-auto'>
            You can change your profile details in this section, just remember
            to confirm your new changes by clicking the save button before you
            exit.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-3'>
        <div className='col-span-1 card rounded-sm p-2 mx-2'>
          <h5 className='text-gray-600 uppercase text-center my-3'>Username</h5>
          <h6 className='text-default-gold text-center'>YehezkielBryan</h6>
        </div>
        <div className='col-span-1 card rounded-sm p-2 mx-2'>
          <h5 className='text-gray-600 uppercase text-center my-3'>Email</h5>
          <h6 className='text-default-gold text-center'>
            YehezkielBryan@gmail.com
          </h6>
        </div>
        <div className='col-span-1 card rounded-sm p-2 mx-2'>
          <h5 className='text-gray-600 uppercase text-center my-3'>Password</h5>
          <h6 className='text-default-gold text-center'>********</h6>
        </div>
        <div className='col-span-1 card rounded-sm p-2 mx-2'>
          <h5 className='text-gray-600 uppercase text-center my-3 hidden'>
            Email
          </h5>
          <h6 className='text-default-gold text-center hidden'>
            YehezkielBryan@gmail.com
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
