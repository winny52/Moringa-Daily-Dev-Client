import React, { useEffect, useState } from "react";
import axios from "axios";

// Create an Axios instance with the base URL of your local backend
const api = axios.create({
  baseURL: "https://moringaschool-daily.onrender.com", 
});

const FeaturedView = () => {
  const [randomContent, setRandomContent] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    async function fetchRandomContent() {
      try {
        console.log("Before making the request");

        const response = await api.get("/content/random"); // Use the Axios instance to make the request

        console.log("After the request", response.data);

        setRandomContent(response.data);
      } catch (error) {
        console.error("Error fetching random content:", error);
      }
    }

    fetchRandomContent();
  }, []); // The empty dependency array ensures this runs once when the component mounts

  const handleReadMore = () => {
    setShowFullDescription(true);
  };

  return (
    <div className="bg-default-green grid grid-cols-2">
      <div className="col-span-1">
        <img
          src={randomContent?.media_url || "/assets/images/moringa-bg.jpeg"}
          alt="featured article"
        />
      </div>
      <div className="col-span-1 flex flex-col p-12 relative">
        <h6 className="text-default-gold text-xl uppercase italic">Top Story</h6>
        <h2 className="text-default-gold text-2xl py-3 font-semibold">
          {randomContent?.title || "Loading..."}
        </h2>
        <h4 className="text-white uppercase text-3xl">OUR HIGHEST RANKING</h4>
        <hr className="w-12 h-1 bg-default-gold rounded-full border-none mt-3" />
        <p className="text-gray-400 text-md py-3">
          {showFullDescription
            ? randomContent?.description
            : (randomContent?.description || "Loading...").slice(0, 100)}
          {randomContent?.description.length > 100 && !showFullDescription && (
            <button onClick={handleReadMore}></button>
          )}
        </p>
        <h4 className="text-gray-400 uppercase text-lg">
          <a
            href={
              randomContent?.content_id
                ? `/content/${randomContent.content_id}`
                : "#"
            }
          >
            <span className="text-default-gold">Read</span> More
          </a>
        </h4>

      </div>
    </div>
  );
};

export default FeaturedView;
