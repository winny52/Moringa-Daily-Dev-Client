import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';

function Upload() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dkwurmldt',
        uploadPreset: 'mds',
      },
      (error, result) => {
        console.log(error, result);
      }
    );
  }, []);

  const [uploadFile, setUploadFile] = useState('');
  const [cloudinaryImage, setCloudinaryImage] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'mds');

    Axios.post('https://api.cloudinary.com/v1_1/dkwurmldt/image/upload', formData)
      .then((response) => {
        console.log(response);
        setCloudinaryImage(response.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openCloudinaryWidget = () => {
    // Open the Cloudinary upload widget
    widgetRef.current.open();
  };

  return (
    <div className="App">
      <section className="left-side">
        <form>
          <h3>Upload Images to Cloudinary Cloud Storage</h3>
          <div>
            <input
              type="file"
              onChange={(event) => {
                setUploadFile(event.target.files[0]);
              }}
            />
          </div>
          <button onClick={handleUpload}>Upload File</button>
        </form>
        <button onClick={openCloudinaryWidget}>Upload Via Widget</button>
      </section>
      <section className="right-side">
        <h3>The resulting image will be displayed here</h3>
        {cloudinaryImage && <img src={cloudinaryImage} alt="Uploaded" />}
      </section>
    </div>
  );
}

export default Upload;
