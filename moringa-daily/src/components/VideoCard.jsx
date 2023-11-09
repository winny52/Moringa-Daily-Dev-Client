import React from "react";
import StarIcon from "@mui/icons-material/Star";

const VideoCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-3/5 bg-white rounded'>
      <div className='col-span-1'>
        <iframe
          src='https://www.youtube.com/embed/-gsTLMgdEPQ?si=fH1GmMtBOPTf4zQ5'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          className='w-full h-full rounded'
        ></iframe>
      </div>
      <div className='col-span-1 py-4 px-4'>
        <div className='flex justify-between text-default-green text-md py-2'>
          <p>Sean Paul</p>
          <p>30th Nov 2023</p>
        </div>
        <h3 className='text-default-green font-semibold text-lg mb-3'>
          Will Robots take you job in future?
        </h3>
        <p className='text-gray-600 text-sm my-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          similique, maiores molestiae aspernatur, dignissimos optio.
        </p>
        <h6 className='text-default-gold text-md italic cursor-pointer'>
          Read More
        </h6>
        <div className='flex text-default-gold justify-end'>
          <StarIcon style={{ fontSize: "20px" }} />
          <StarIcon style={{ fontSize: "20px" }} />
          <StarIcon style={{ fontSize: "20px" }} />
          <StarIcon style={{ fontSize: "20px" }} />
          <StarIcon style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
