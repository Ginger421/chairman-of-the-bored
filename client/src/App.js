import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProfilePage from "./pages/profilePage";
import LeaderBoardPage from "./pages/LeaderBoardPage";

// Apollo Client Setup
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthProvider } from "./context/authContext";

// Client-side startup

// Authorization Context

const App = () => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default App;
