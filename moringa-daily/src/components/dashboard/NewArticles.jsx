import React from "react";
import ArticleCard from "../ArticleCard";
import { useSelector } from "react-redux";

const NewArticles = () => {
  const article = useSelector((state) => state.article);
  const { articles } = article;
  return (
    <div className='text-white shadow-sm px-2 py-4 md:p-4 md:mx-2 mt-3'>
      <div className='flex items-center gap-3 my-3'>
        <div className='w-4 h-4 rounded-full bg-red-500 flex justify-center items-center'></div>
        <h6 className='text-red-500 my-auto'>Approve New Articles</h6>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 flex justify-center'>
        {articles?.slice(0, 11).map((article) => {
          return (
            <div className='col-span-1 p-2' key={article.content_id}>
              <ArticleCard
                is_new_article={false}
                is_wishlist={true}
                article={article}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArticles;
