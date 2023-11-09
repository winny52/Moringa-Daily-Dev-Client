import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../redux/actions/categoryActions";
import { addUserCategory } from "../../redux/slices/categorySlices";

const CategorySection = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category);
  const { success_create, categories, userCategories } = category;

  const handleInputChange = (category_id) => {
    dispatch(
      addUserCategory({
        name: category_id,
        value: !userCategories[category_id],
      })
    );
  };

  const handleSaveCategories = () => {};

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch, success_create]);

  return (
    <div className='bg-white p-4 card mx-2 mt-4'>
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
        {categories.map((category) => {
          const { category_id, name } = category;
          const isChecked = userCategories[category_id] || false;
          return (
            <div className='col-span-1 flex gap-2 m-2' key={category_id}>
              <input
                type='checkbox'
                className='w-5 h-5 focus:ring-blue-500'
                checked={isChecked}
                onChange={() => handleInputChange(category_id)}
              />
              <h6 className='my-auto text-gray-600 text-md'>{name}</h6>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center my-3'>
        <button
          className='bg-default-gold w-64 rounded uppercase py-1 text-default-green font-semibold text-sm'
          onClick={handleSaveCategories}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
