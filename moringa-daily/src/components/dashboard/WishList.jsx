import React from "react";
import ArticleCard from "../ArticleCard";

const WishList = () => {
  return (
    <div className='text-white shadow-sm p-4 mx-2 mt-3'>
      <div className='flex items-center gap-3 my-3'>
        <div className='w-8 h-8 rounded-full bg-default-gold flex justify-center items-center'>
          <i class='fa fa-heart-o' aria-hidden='true'></i>
        </div>
        <h6 className='text-default-gold my-auto'>Wishlist</h6>
      </div>
      <div className='grid grid-cols-3 flex justify-center'>
        <div className='col-span-1 p-2'>
          <ArticleCard is_new_article={false} is_wishlist={true} />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard is_new_article={false} is_wishlist={true} />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard is_new_article={false} is_wishlist={true} />
        </div>
      </div>
    </div>
  );
};

export default WishList;
