// import React from "react";
// import ImageUpload from "./ImageUpload"; // Import the Upload component from the same directory

// const CreatePost = () => {
//   return (
//     <div className="bg-white p-4 shadow-sm mx-2 mt-4">
//       <div className="flex items-center gap-3 mt-3">
//         <div className="w-4 h-4 rounded-full bg-red-900 flex justify-center items-center"></div>
//         <h6 className="text-red-900 my-auto text-xl">Post Content</h6>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-5">
//         <div className="col-span-1 md:col-span-3">
//           <div className="mb-3">
//             <p className="text-gray-600 text-sm py-2">Post Title below</p>
//             <input
//               type="text"
//               className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
//             />
//           </div>
//           <div className="mb-3">
//             <p className="text-gray-600 text-sm py-2">Choose story categories</p>
//             <select
//               type="text"
//               className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
//             >
//               <option>A.I & Machine Learning</option>
//               <option>Internet of Things (IoT)</option>
//               <option>Cloud Computing</option>
//               <option>Theory of Computation</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <p className="text-gray-600 text-sm py-2">
//               Type the full article in the box below
//             </p>
//             <textarea
//               type="text"
//               rows={8}
//               className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
//             ></textarea>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-2 mx-8">
//           <div className="mb-3 content-type">
//             <h6 className="text-default-gold py-2 text-md">Select Content Type</h6>
//             <div className="flex gap-2 items-center">
//               <input type="radio" name="content_type" />
//               <p className="text-gray-600 text-md">Article</p>
//             </div>
//             <div className="flex gap-2 items-center">
//               <input type="radio" name="content_type" />
//               <p className="text-gray-600 text-md">Audio</p>
//             </div>
//             <div className="flex gap-2 items-center">
//               <input type="radio" name="content_type" />
//               <p className="text-gray-600 text-md">Video</p>
//             </div>
//           </div>
//           <div className="mb-3">
//             <h6 className="text-default-gold py-2 text-md">Upload Features Image</h6>
//             <ImageUpload/> {/* Render the Upload component here */}
//           </div>
//           <div className="mb-3">
//             <h6 className="text-default-gold py-2 text-md">Enter Link URL:</h6>
//             <input
//               type="text"
//               className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
//               placeholder="*For Audio and video files"
//             />
//           </div>
//           <button className="mt-3 w-full bg-red-900 uppercase text-md text-white py-1 rounded mx-2">
//             Publish Post
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;


import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload"; // Import the Upload component from the same directory
import { Image } from 'cloudinary-react'; // Import Image component from Cloudinary

const CreatePost = () => {
  // Step 1: Define state variables
  const [imageURL, setImageURL] = useState(""); // State variable to store the URL of the uploaded image

  // Step 2: Callback function to handle the image URL
  const handleImageURL = (url) => {
    console.log("Image handler reached");
    setImageURL(url);
    console.log("My Image");
    console.log(imageURL)
  };
   

  return (
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
              className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
            />
          </div>
          <div className="mb-3">
            <p className="text-gray-600 text-sm py-2">Choose story categories</p>
            <select
              type="text"
              className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
            >
              <option>A.I & Machine Learning</option>
              <option>Internet of Things (IoT)</option>
              <option>Cloud Computing</option>
              <option>Theory of Computation</option>
            </select>
          </div>
          <div className="mb-3">
            <p className="text-gray-600 text-sm py-2">
              Type the full article in the box below
            </p>
            <textarea
              type="text"
              rows={8}
              className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
            ></textarea>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 mx-8">
          <div className="mb-3 content-type">
            <h6 className="text-default-gold py-2 text-md">Select Content Type</h6>
            <div className="flex gap-2 items-center">
              <input type="radio" name="content_type" />
              <p className="text-gray-600 text-md">Article</p>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="content_type" />
              <p className="text-gray-600 text-md">Audio</p>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="content_type" />
              <p className="text-gray-600 text-md">Video</p>
            </div>
          </div>
          <div className="mb-3">
            <h6 className="text-default-gold py-2 text-md">Upload Features Image</h6>
            {/* Step 3: Pass the callback function to ImageUpload */}
            <ImageUpload onImageUpload={handleImageURL} />
          </div>
          <div className="mb-3">
            <h6 className="text-default-gold py-2 text-md">Enter Link URL:</h6>
            <input
              type="text"
              className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
              placeholder="*For Audio and video files"
            />
          </div>
          <button className="mt-3 w-full bg-red-900 uppercase text-md text-white py-1 rounded mx-2">
            Publish Post
          </button>
        </div>
      </div>
      {imageURL && ( // Step 4: Render the image if imageURL is available

        <div className="mb-3">
          <h1>{imageURL}</h1>
        

          <h6 className="text-default-gold py-2 text-md">Uploaded Image</h6>
          <Image cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} publicId={imageURL} />
        </div>
      )}
    </div>
  );
};

export default CreatePost;

