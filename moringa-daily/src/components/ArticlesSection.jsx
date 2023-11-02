import React from "react";
import ArticleCard from "./ArticleCard";
import BrushIcon from "@mui/icons-material/Brush";

const ArticlesSection = () => {
  return (
    <div className='bg-white p-12'>
      <div className='flex gap-3 items-center my-3'>
        <div className='w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green'>
          <BrushIcon style={{ fontSize: "28px" }} />
        </div>
        <h5 className='text-default-green text-lg font-semibold my-auto'>
          Latest Articles
        </h5>
      </div>
      <div className='grid grid-cols-4 flex justify-center'>
        <div className='col-span-1 p-2'>
          <ArticleCard />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard />
        </div>
        <div className='col-span-1 p-2'>
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
