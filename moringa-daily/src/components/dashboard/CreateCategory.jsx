import React from "react";

const CreateCategory = () => {
  return (
    <div className='bg-white p-4 shadow-sm mx-2 mt-4'>
      <div className='flex items-center gap-3 mt-3'>
        <div className='w-4 h-4 rounded-full bg-red-900 flex justify-center items-center'></div>
        <h6 className='text-red-900 my-auto'>Add New Category</h6>
      </div>
      <p className='text-gray-600 text-sm py-2'>
        Type category name in the box below
      </p>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <input
          type='text'
          className='col-span-1 md:col-span-3 border focus:outline-none rounded-lg px-2 text-gray-600'
        />
        <button className='col-span-1 md:col-span-2 bg-red-900 uppercase text-md text-white py-1 rounded mx-2'>
          Save New Category
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
