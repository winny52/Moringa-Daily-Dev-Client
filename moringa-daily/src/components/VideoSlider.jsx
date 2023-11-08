import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideoCard from "./VideoCard";

const VideoSlider = () => {
  return (
    <div className='bg-default-green px-4 md:px-16 py-4 md:py-12'>
      <div className='flex gap-3 items-center'>
        <div className='w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green'>
          <VideocamIcon style={{ fontSize: "28px" }} />
        </div>
        <h5 className='text-white text-lg font-semibold my-auto'>
          Popular Videos
        </h5>
      </div>
      <div className='mt-3 flex justify-center'>
        <VideoCard />
      </div>
    </div>
  );
};

export default VideoSlider;
