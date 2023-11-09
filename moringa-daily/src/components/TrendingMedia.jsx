import React from "react";
import StarIcon from "@mui/icons-material/Star";

const TrendingMedia = () => {
  return (
    <div className='text-white p-4 md:p-12 grid grid-cols-1 md:grid-cols-2'>
      <div className='col-span-1 md:p-12'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green'>
            <StarIcon style={{ fontSize: "28px" }} />
          </div>
          <h5 className='text-default-green text-xl font-semibold my-auto'>
            Trending Media
          </h5>
        </div>
        <h2 className='text-gray-700 text-2xl md:text-3xl py-3'>
          Interview <br /> By Top TM
        </h2>
        <hr className='w-48' />
        <p className='py-3 text-gray-600 text-sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, neque.
          Atque, autem? Cupiditate, asperiores nemo. Magnam, odio? Tenetur
          consequuntur, obcaecati corrupti natus, iste asperiores iure ab qui
          consectetur maxime ipsum.
        </p>
      </div>
      <div className='col-span-1 border rounded h-48 md:h-auto flex items-center justify-center bg-slate-200'>
        <iframe
          src='https://www.youtube.com/embed/-gsTLMgdEPQ?si=fH1GmMtBOPTf4zQ5'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          className='w-full h-full rounded'
        ></iframe>
      </div>
    </div>
  );
};

export default TrendingMedia;
