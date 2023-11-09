import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import ArticlesSection from "../components/ArticlesSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectArticles } from "../redux/slices/articleSlices";

const ArticlePage = () => {
  const article = useSelector(selectArticles);

  console.log('article',article)
  const { articles } = article;
  return (
    <div>
      <Header />
      <Article />
      <ArticlesSection section_color='bg-default-green' articles={article} />
      <Footer />
    </div>
  );
};

export default ArticlePage;