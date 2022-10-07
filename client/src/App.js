import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar";
//layouts
import LandingPageLayout from "./layouts/landingPage";
//Pages
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
