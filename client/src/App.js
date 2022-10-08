import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar";
//layouts
import LandingPageLayout from "./layouts/landingPage";
//Pages
import HomePageLayout from "./pages/homePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/" element={<HomePageLayout/>} />
      </Routes>
    </Router>
  );
};

export default App;
