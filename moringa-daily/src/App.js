import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Dashboard from "./pages/Dashboard"
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ArticlePage" element={<ArticlePage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
       </Routes>
    </Router>
  );
}

export default App;
