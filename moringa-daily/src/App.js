import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper";

function App() {
  return (
    <Router>
      <AuthWrapper />
    </Router>
  );
}

export default App;
