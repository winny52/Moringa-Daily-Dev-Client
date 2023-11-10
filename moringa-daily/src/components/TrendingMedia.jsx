import React, { useEffect, useState } from "react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";

const TrendingMedia = () => {
  const [trendingMedia, setTrendingMedia] = useState(null);

  // Create an Axios instance with the base URL of your local backend
  const api = axios.create({
    baseURL: "https://moringaschool-daily.onrender.com",
  });

  useEffect(() => {
    async function fetchTrendingMedia() {
      try {
        const response = await api.get("/trending-media");

        // Set the fetched trending media data to the state
        setTrendingMedia(response.data);
      } catch (error) {
        console.error("Error fetching trending media:", error);
      }
    }

    fetchTrendingMedia();
  }, []); // The empty dependency array ensures this runs once when the component mounts

  return (
    <div className="text-white p-12 grid grid-cols-2">
      <div className="col-span-1 p-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-default-gold flex justify-center items-center text-default-green">
            <StarIcon style={{ fontSize: "28px" }} />
          </div>
          <h5 className="text-default-green text-lg font-semibold my-auto">
            Trending Media
          </h5>
        </div>
        <h2 className="text-gray-700 text-3xl py-3">
          {trendingMedia?.title || "Loading..."}
        </h2>
        <hr className="w-48" />
        <p className="py-3 text-gray-600 text-sm">
          {trendingMedia?.description || "Loading..."}
        </p>
      </div>
      <div className="col-span-1 border rounded p-12 flex items-center justify-center bg-slate-200">
        <iframe
          width="350"
          height="200"
          src={trendingMedia?.media_url || "https://www.youtube.com/embed/your-default-video"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrendingMedia;
