import React from "react";
import Header from "../components/Header";
import FeaturedView from "../components/FeaturedView";
import NewPostSection from "../components/NewPostSection";
import TrendingMedia from "../components/TrendingMedia";
import VideoSlider from "../components/VideoSlider";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const HomePage = () => {
  const article = useSelector((state) => state.article);
  const { articles } = article;
  return (
    <>
      <Header />
      <FeaturedView />
      <NewPostSection />
      <TrendingMedia />
      <VideoSlider />
      <ArticlesSection section_color='bg-white' articles={articles} />
      <Footer />
    </>
  );
};

export default HomePage;
