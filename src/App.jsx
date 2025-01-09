import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
