// ArticlePage.js
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ArticlePage = () => {
  // Fake data for the article
  const articleData = {
    author: "John Doe",
    date: "1st Nov 2023",
    title: "How is AI changing the modern office?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit placeat quo quasi eaque saepe! Dolorum, harum voluptate quisquam nostrum repellendus magnam alias sunt illum possimus corrupti laudantium dolore officia.",
  };

  // Function to handle editing the article
  const handleEditArticle = () => {
    // Implement the edit article logic here
    alert("Edit button clicked!");
  };

  // Function to handle adding comments
  const handleAddComment = () => {
    // Implement the add comment logic here
    alert("Add comment button clicked!");
  };

  return (
    <div>
      <h1>{articleData.title}</h1>
      <div>
        <div className="flex justify-between text-slate-300 text-md">
          <div className="flex gap-1 items-center">
            <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
            <h6 className="my-auto">{articleData.author}</h6>
          </div>
          <div>
            <h6 className="my-auto">{articleData.date}</h6>
          </div>
        </div>
        <p>{articleData.content}</p>
      </div>
      <button onClick={handleEditArticle}>Edit Article</button>
      <div>
        <h2>Comments</h2>
        {/* Render comments here */}
        {/* You can map over an array of comments and display them */}
      </div>
      <div>
        <textarea placeholder="Add a comment"></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default ArticlePage;
