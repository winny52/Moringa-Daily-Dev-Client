// import React from "react";
// import VideocamIcon from "@mui/icons-material/Videocam";
// import VideoCard from "./VideoCard";

// const VideoSlider = () => {
//   return (
//     <div className='bg-default-green px-16 py-12'>
//       <div className='flex gap-3 items-center'>
//         <div className='w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green'>
//           <VideocamIcon style={{ fontSize: "28px" }} />
//         </div>
//         <h5 className='text-white text-lg font-semibold my-auto'>
//           Popular Videos
//         </h5>
//       </div>
//       <div className='mt-3 flex justify-center'>
//         <VideoCard />
//       </div>
//     </div>
//   );
// };

// export default VideoSlider;

import React, { useEffect, useState } from "react";
import axios from "axios";

// Create an Axios instance with the base URL of your local backend
const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // Replace with your local backend URL
});

const VideoSlider = () => {
  const [highestRatedContent, setHighestRatedContent] = useState(null);

  useEffect(() => {
    async function fetchHighestRatedContent() {
      try {
        const response = await api.get("/highest-rated-content"); // Make an API request using the Axios instance
        setHighestRatedContent(response.data);
      } catch (error) {
        console.error("Error fetching highest-rated content:", error);
      }
    }

    fetchHighestRatedContent();
  }, []);

  return (
    <div className="bg-default-green px-16 py-12">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green">
          {/* Display the icon */}
          {/* ... */}
        </div>
        <h5 className="text-white text-lg font-semibold my-auto">Popular Content</h5>
      </div>
      {highestRatedContent ? (
        <div className="mt-3 flex justify-center">
          {/* Display the highest-rated content */}
          <h2 className="text-gray-700 text-3xl py-3">{highestRatedContent.title}</h2>
          <hr className="w-48" />
          <p className="py-3 text-gray-600 text-sm">{highestRatedContent.description}</p>
        </div>
      ) : (
        <div className="mt-3 flex justify-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
