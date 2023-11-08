import React, { useState, useEffect } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    content_type: "Article",
    image: null,
    media_url: "",
  });

  const [categories, setCategories] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000//content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Content posted successfully
        alert("Content posted");
      } else {
        // Content not posted
        alert("Content not posted");
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetch("http://127.0.0.1:5000//categories") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-4 shadow-sm mx-2 mt-4">
        <div className="flex items-center gap-3 mt-3">
          <div className="w-4 h-4 rounded-full bg-red-900 flex justify-center items-center"></div>
          <h6 className="text-red-900 my-auto text-xl">Post Content</h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-1 md:col-span-3">
            <div className="mb-3">
              <p className="text-gray-600 text-sm py-2">Post Title below</p>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
              />
            </div>
            <div className="mb-3">
              <div>
                <p className="text-gray-600 text-sm py-2">Choose story categories</p>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-gray-600 text-sm py-2">Choose story categories</p>
            </div>
            <div className="mb-3">
              <p className="text-gray-600 text-sm py-2">
                Type the full article in the box below
              </p>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={8}
                className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
              ></textarea>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 mx-8">
            <div className="mb-3 content-type">
              <h6 className="text-default-gold py-2 text-md">Select Content Type</h6>
              <div className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="content_type"
                  value="Article"
                  checked={formData.content_type === "Article"}
                  onChange={handleInputChange}
                />
                <p className="text-gray-600 text-md">Article</p>
              </div>
              <div className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="content_type"
                  value="Audio"
                  checked={formData.content_type === "Audio"}
                  onChange={handleInputChange}
                />
                <p className="text-gray-600 text-md">Audio</p>
              </div>
              <div className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="content_type"
                  value="Video"
                  checked={formData.content_type === "Video"}
                  onChange={handleInputChange}
                />
                <p className="text-gray-600 text-md">Video</p>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="text-default-gold py-2 text-md">Upload Features Image</h6>
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                className="rounded py-1"
              />
            </div>
            <div className="mb-3">
              <h6 className="text-default-gold py-2 text-md">Enter Link URL:</h6>
              <input
                type="text"
                name="media_url"
                value={formData.media_url}
                onChange={handleInputChange}
                className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
                placeholder=" *For Audio and video files"
              />
            </div>
            <button
              className="mt-3 w-full bg-red-900 uppercase text-md text-white py-1 rounded mx-2"
              type="submit"
              name="data"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;