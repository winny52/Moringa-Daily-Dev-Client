import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ArticlePage" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
