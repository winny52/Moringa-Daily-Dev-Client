import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  getAverageRating,
  listComments,
  rateArticle,
} from "../redux/actions/commentActions";
import { addArticleControls } from "../redux/slices/articleSlices";
import { removeArticle } from "../redux/actions/articleActions";
import {
  addItemToWishList,
  removeItemFromWishlist,
} from "../redux/actions/wishlistActions";
import { Link } from "react-router-dom";

const Article = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const articleId = Number(params.id);

  const article = useSelector((state) => state.article);
  const { articles, controls, success_remove } = article;

  const currentArticle = articles?.find(
    (article) => article.content_id === articleId
  );

  const [comment, setComment] = useState("");

  const commentState = useSelector((state) => state.comment);
  const { success_create, success_rating, comments, loading } = commentState;

  const [relatedArticles, setRelatedArticles] = useState([]);

  const content_id = currentArticle?.content_id;

  const handleControlsChange = (e) => {
    let { name } = e.target;
    name = name + content_id;
    dispatch(
      addArticleControls({
        name,
        value: !controls[name],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      dispatch(
        createComment({
          content_id: currentArticle?.content_id,
          user_id: 1,
          text: comment,
        })
      );
    }
  };

  useEffect(() => {
    if (success_create) {
      setComment("");
      dispatch(listComments(currentArticle?.content_id));
    }
  }, [dispatch, success_create, currentArticle]);

  useEffect(() => {
    dispatch(listComments(currentArticle?.content_id));
  }, [dispatch, currentArticle]);

  const handleRating = (e) => {
    const rating_val = e.target.value;
    if (rating_val !== "none") {
      dispatch(
        rateArticle({
          content_id: currentArticle?.content_id,
          rating_value: Number(e.target.value),
        })
      );
    }
  };

  useEffect(() => {
    if (success_rating) {
      dispatch(getAverageRating(currentArticle.content_id));
    }
  }, [success_rating, currentArticle, dispatch]);

  const removeName = "remove" + content_id;
  const wishlistName = "wishlist" + content_id;
  const flagName = "flag" + content_id;

  useEffect(() => {
    if (controls[removeName]) {
      dispatch(removeArticle(currentArticle?.content_id));
    } else if (controls[wishlistName]) {
      dispatch(addItemToWishList(currentArticle?.content_id));
    } else if (!controls[wishlistName]) {
      dispatch(removeItemFromWishlist(currentArticle?.content_id));
    }
  }, [controls, dispatch, currentArticle, removeName, wishlistName]);

  useEffect(() => {
    if (success_remove) {
      navigate("/");
    }
  }, [success_create, navigate, success_remove]);

  useEffect(() => {
    const relatedArticles = articles.filter(
      (article) =>
        article.category_id === currentArticle?.category_id &&
        article.content_id !== currentArticle?.content_id
    );
    setRelatedArticles(relatedArticles);
  }, [articles, currentArticle]);

  return (
    <section className='article-sect'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-2'>
          <img
            src={
              currentArticle?.media_url === ""
                ? "data:image/jpeg;base64,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"
                : currentArticle?.media_url
            }
            alt='featured article'
            className='h-48 md:h-80 w-full object-cover'
          />
        </div>
        <div className='col-span-1 bg-default-green p-4'>
          <h4 className='text-amber-400 text-md font-semibold mb-3 md:md-0 md:my-3'>
            Related Articles
          </h4>
          <ul className='text-gray-400 text-md list-inside list-disc'>
            {relatedArticles?.map((article) => {
              return (
                <li
                  className='border-top py-2 border-amber-400 text-amber-400'
                  key={article.content_id}
                >
                  <Link to={`/articles/${article.content_id}`}>
                    {article.title.slice(0, 30)}...
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-2 p-8'>
          <h3 className='text-default-green font-semibold text-xl md:text-3xl'>
            {currentArticle?.title}
          </h3>
          <div className='mt-2 d-md-none'>
            <div className='flex justify-between text-slate-300 text-md'>
              <div className='flex gap-1 items-center'>
                <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
                <h6 className='my-auto'>John Doe</h6>
              </div>
              <div className='flex gap-1 items-center'>
                <i
                  className='fa fa-clock-o'
                  aria-hidden='true'
                  style={{ fontSize: "18px" }}
                ></i>
                <h6 className='my-auto'>1st Nov 2023</h6>
              </div>
            </div>
            <div className='flex text-default-gold my-3'>
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
            </div>
          </div>
          <p className='text-gray-700 py-3 text-md'>
            {currentArticle?.description}
          </p>
          <div className='flex justify-end my-3'>
            <button className='bg-red-600 rounded py-1 px-3 text-white cursor-pointer'>
              Edit
            </button>
          </div>
          <h5 className='text-amber-400 text-xl'>Add Comment</h5>
          {loading && <p>loading...</p>}
          <textarea
            rows={3}
            className='w-full md:w-3/5 border focus:outline-none text-gray-700 py-1 px-2 rounded mt-3'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          {comments?.map((comment) => {
            return (
              <p className='alert alert-success text-gray-700'>
                {comment.text}
              </p>
            );
          })}
          <div className='w-full md:w-3/5 h-16 flex items-end'>
            <div className='w-3/5'>
              <h6 className='text-amber-400 text-md py-1'>Rate the article</h6>
              <select
                className='w-full border focus:outline-none px-3 py-1 text-gray-700 text-md italic rounded'
                onChange={handleRating}
              >
                <option value='none'>-- Rate the article --</option>
                <option value='5'>5 - Very Good</option>
                <option value='4'>4 - Good</option>
                <option value='3'>3 - Average</option>
                <option value='2'>2 - Poor</option>
                <option value='1'>1 - Very Poor</option>
              </select>
            </div>
            <button
              className='w-2/5 bg-default-gold  ml-1  text-md rounded py-1 text-white cursor-pointer'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white px-8 pt-8 md:pr-8 mb-3'>
          <div className='d-none d-md-block'>
            <div className='flex justify-between text-slate-300 text-md'>
              <div className='flex gap-1 items-center'>
                <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
                <h6 className='my-auto'>John Doe</h6>
              </div>
              <div className='flex gap-1 items-center'>
                <i
                  className='fa fa-clock-o'
                  aria-hidden='true'
                  style={{ fontSize: "18px" }}
                ></i>
                <h6 className='my-auto'>1st Nov 2023</h6>
              </div>
            </div>
            <div className='flex text-default-gold my-3'>
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon style={{ fontSize: "26px" }} />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
              <StarIcon
                style={{ fontSize: "26px" }}
                className='text-slate-200'
              />
            </div>
          </div>
          <div className='border border-amber-400 border-2 px-8 md:mt-5 py-3'>
            <h6 className='text-amber-400 text-md mb-1'>Controls</h6>
            <div className='mt-2 flex gap-3'>
              <input
                type='checkbox'
                name='wishlist'
                value={currentArticle?.content_id}
                checked={controls[wishlistName] || false}
                onChange={handleControlsChange}
                className='w-5 h-5'
              />
              <h6 className='my-auto text-gray-600 text-md'>Add to wishlist</h6>
            </div>
            <div className='mt-2 flex gap-3'>
              <input
                type='checkbox'
                className='w-5 h-5'
                name='flag'
                value={currentArticle?.content_id}
                checked={controls[flagName] || false}
                onChange={handleControlsChange}
              />
              <h6 className='my-auto text-gray-600 text-md'>Flag</h6>
            </div>
            <div className='mt-2 flex gap-3'>
              <input
                type='checkbox'
                className='w-5 h-5'
                name='remove'
                value={currentArticle?.content_id}
                checked={controls[removeName] || false}
                onChange={handleControlsChange}
              />
              <h6 className='my-auto text-gray-600 text-md'>Remove</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
