import React, { useEffect } from "react";
import ArticleCard from "../ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../../redux/actions/articleActions";
import { selectArticles } from "../../redux/slices/articleSlices";

const NewArticles = ({articles}) => {

  const flagged = useSelector((state) => state.flagged);
  const {flaggedArticles} = flagged;

  return (
    <div className='text-white shadow-sm p-4 mx-2 mt-3'>
      <div className='flex items-center gap-3 my-3'>
        <div className='w-4 h-4 rounded-full bg-red-500 flex justify-center items-center'></div>
        <h6 className='text-red-500 my-auto'>Approve Flagged Articles</h6>
      </div>
      <div className='grid grid-cols-3 flex justify-center'>
        {flaggedArticles?.map((article) => (

        <div className='col-span-1 p-2'>
          <ArticleCard  article={article}   />
        </div>
        ))}
      </div>
    </div>
  );
};

export default NewArticles;
