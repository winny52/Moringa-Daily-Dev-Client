import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CreatePost from "./components/dashboard/CreatePost"; // Updated import for CreatePost component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/dashboard" element={<CreatePost />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
