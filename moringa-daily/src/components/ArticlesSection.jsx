import React from "react";
import ArticleCard from "./ArticleCard";
import BrushIcon from "@mui/icons-material/Brush";

const ArticlesSection = ({ articles, section_color }) => {
  return (
    <div className={`${section_color} py-12 px-2 md:px-12`}>
      <div className='flex gap-3 items-center my-3'>
        <div className='w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green'>
          <BrushIcon style={{ fontSize: "28px" }} />
        </div>
        <h5
          className={`${
            section_color === "bg-default-green"
              ? "text-white"
              : "text-default-green"
          } text-lg font-semibold my-auto`}
        >
          Latest Articles
        </h5>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex justify-center'>
        {articles?.map((article) => {
          return (
            <div className='col-span-1 p-2' key={article.content_id}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
      <div className='w-full flex justify-center my-2'>
        <button className='bg-teal-800 px-4 text-white rounded py-2 shadow-lg'>
          Show More Articles
        </button>
      </div>
    </div>
  );
};

export default ArticlesSection;
