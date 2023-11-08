import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listArticles } from "./redux/actions/articleActions";

function App() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const { articles, success_create } = article;

  const category = useSelector((state) => state.category);
  const { userCategories } = category;

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch, success_create, userCategories]);

  console.log(articles);
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/articles/:id' element={<ArticlePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
