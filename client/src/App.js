import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage"
import ProfilePage from "./pages/profilePage"
import LeaderBoardPage from "./pages/LeaderBoardPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/leaderboard" element={<LeaderBoardPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
