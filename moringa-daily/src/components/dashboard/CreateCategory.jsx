import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryActions";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const { loading, success_create } = category;

  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCreateCategory = (e) => {
    e.preventDefault();
    if (categoryName !== "") {
      dispatch(createCategory({ name: categoryName }));
    }
  };

  useEffect(() => {
    if (success_create) {
      setCategoryName("");
    }
  }, [success_create]);
  return (
    <div className='bg-white p-4 card mx-2 mt-4'>
      <div className='flex items-center gap-3 mt-3'>
        <div className='w-4 h-4 rounded-full bg-red-900 flex justify-center items-center'></div>
        <h6 className='text-red-900 my-auto'>Add New Category</h6>
      </div>
      {loading && <p>loading...</p>}
      <p className='text-gray-600 text-sm py-2'>
        Type category name in the box below
      </p>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <input
          type='text'
          className='col-span-1 md:col-span-3 border focus:outline-none rounded-lg px-2 text-gray-600'
          value={categoryName}
          onChange={handleChange}
        />
        <button
          className='col-span-1 md:col-span-2 bg-red-900 uppercase text-md text-white py-1 rounded mx-2 mt-3 md:mt-0'
          onClick={handleCreateCategory}
        >
          Save New Category
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
