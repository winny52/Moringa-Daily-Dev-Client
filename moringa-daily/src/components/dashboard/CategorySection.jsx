import React from "react";

const CategorySection = () => {
  return (
    <div className='bg-white p-4 shadow-sm mx-2 mt-4'>
      <div className='flex items-center gap-3'>
        <div className='w-8 h-8 rounded-full bg-default-gold flex justify-center items-center'>
          <i className='fa fa-calendar' aria-hidden='true'></i>
        </div>
        <h6 className='text-default-gold my-auto'>Categories of interest</h6>
      </div>
      <p className='text-gray-600 text-sm py-2'>
        The categories you choose here will influence the type of content you
        see on your homepage. You can change your selected categories by ticking
        the checkboxes below, and don't forget to save your changes.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 categories'>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>
            Artificial Intelligence
          </h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>
            Blockchain & Cryptocurrency
          </h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>Gaming & VR</h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>Cyber Security</h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>5G and Connectivity</h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>Green Technology</h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>Cloud Computing</h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>
            Tech Policy & Regulation
          </h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>
            Internet of Things (IoT)
          </h6>
        </div>
        <div className='col-span-1 flex gap-2 m-2'>
          <input type='radio' className='w-5 h-5 focus:ring-blue-500' />
          <h6 className='my-auto text-gray-600 text-md'>
            Sapce and Aerospace Technology
          </h6>
        </div>
      </div>
      <div className='flex justify-center my-3'>
        <button className='bg-default-gold w-64 rounded uppercase py-1 text-default-green font-semibold text-sm'>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
