import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase"
import {createArticle, listArticles} from "../../redux/actions/articleActions"

const CreatePost = () => {
  const bucket_url = "gs://moringadailydev.appspot.com/";

  const dispatch = useDispatch()
  const category = useSelector((state) => state.category);
  const {categories} = category;


  const article = useSelector((state) => state.article);
  const {loading, success_create} = article;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    content_type: "Article",
    image: null,
    media_url: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const [file, setFile] = useState("")
  const [fileUrl, setFileUrl] = useState("")
  const [progress, setProgress] = useState(0);
  const [imageUploaded, setImageUploaded] = useState(false);

  const uploadImage = () => {
    setImageUploaded(false);
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app, bucket_url);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          //console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFileUrl(downloadURL);
            setImageUploaded(true);
          });
        }
      );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadImage()
    if (fileUrl !== ""){
      console.log("posting content...")
      dispatch(createArticle({...formData, media_url: fileUrl}))
    }
  };


  useEffect(() => {
    if (success_create){
      setFormData(
        {
        title: "", category: "", description: "", content_type: "Article", image: null, media_url: "",})
      dispatch(listArticles())
    }
  }, [dispatch,  success_create])
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-4 shadow-sm mx-2 mt-4">
        <div className="flex items-center gap-3 mt-3">
          <div className="w-4 h-4 rounded-full bg-red-900 flex justify-center items-center"></div>
          <h6 className="text-red-900 my-auto text-xl">Post Content</h6>
          {loading && <p>Loading...</p>}
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
          <div className="col-span-1 md:col-span-2 mx-8">/admin/create-category
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
                onChange={(e) => setFile(e.target.files[0])}
                className="rounded py-1"
              />
            </div>
            <div className="mb-3">
              <h6 className="text-default-gold py-2 text-md">Enter Link URL:</h6>
              <input
                type="text"
                name="media_url"
                value={fileUrl}
                onChange={handleInputChange}
                className="w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600"
                placeholder="please don't typ"
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
}

export default CreatePost;