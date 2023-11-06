import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";

const ArticlePage = () => {
  return (
    <div>
      <Header />
      <Article />
      <ArticlesSection section_color='bg-default-green' />
      <Footer />
    </div>
  );
};

export default ArticlePage;
