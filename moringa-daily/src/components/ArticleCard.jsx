import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ArticleCard = ({ is_flagged_article, is_wishlist,onApprove,onRemoveFromWishlist }) => {








  return (
    <div className="card border">
      <img src="/assets/images/image-2.jpeg" className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="flex justify-between text-slate-300 text-md">
          <div className="flex gap-1 items-center">
            <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
            <h6 className="my-auto">John Doe</h6>
          </div>
          <div>
            <h6 className="my-auto">1st Nov 2023</h6>
          </div>
        </div>
        <h5 className="text-default-green font-semibold py-2">
          How is AI changing the modern office?
        </h5>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit placeat quo quasi eaque saepe! Dolorum, harum voluptate quisquam nostrum repellendus magnam alias sunt illum possimus corrupti laudantium dolore officia.
        </p>
        <h6 className="py-3 text-default-gold text-md cursor-pointer">
          <Link to="/articles/:id">Read More</Link>
        </h6>
        {is_flagged_article && (
          <div className="flex gap-4 justify-end">
          <button onClick={onApprove} className="text-red-400 uppercase my-auto text-sm cursor-pointer">
              Aprrove
            </button>
            <button className="text-red-400 uppercase my-auto text-sm cursor-pointer">
              Delete
            </button>
          </div>
        )}
        {is_wishlist && (
          <div className="flex justify-between">
            <button onClick={onRemoveFromWishlist} className="text-red-400 uppercase my-auto text-sm cursor-pointer">
              Remove from list
            </button>
            <div className="flex text-default-gold justify-end">
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} className="text-slate-200" />
              <StarIcon style={{ fontSize: "20px" }} className="text-slate-200" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
