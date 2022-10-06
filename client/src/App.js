import React from "react";
import { Routes , Route } from 'react-router-dom';
//layouts
import LandingPageLayout from "./layouts/landingPage"
//Pages
import HomePage from './pages/homePage';

  const App = () => {
  return (
    <Routes>
      <Route path="/">
        <LandingPageLayout heading="Chairman of the Bored">
          <HomePage />
        </LandingPageLayout>
      </Route>
    </Routes>
  );
}

export default App;
