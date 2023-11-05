import React from "react";
import ArticleCard from "../ArticleCard";

const NewArticles = () => {
  return (
    <div className='text-white shadow-sm p-4 mx-2 mt-3'>
      <div className='flex items-center gap-3 my-3'>
        <div className='w-4 h-4 rounded-full bg-red-500 flex justify-center items-center'></div>
        <h6 className='text-red-500 my-auto'>Approve New Articles</h6>
      </div>
      <div className='grid grid-cols-3 flex justify-center'>
        <div className='col-span-1 p-2'>
          <ArticleCard is_new_article={true} />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard is_new_article={true} />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard is_new_article={true} />
        </div>
      </div>
    </div>
  );
};

export default NewArticles;
