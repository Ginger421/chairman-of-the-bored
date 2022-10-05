import React from "react";
import { Switch,Route } from 'react-router-dom';
//layouts
import LandingPageLayout from "./layouts/LandingPage";
//Pages
import HomePage from './pages/HomePage';

  const App = () => {
  return (
    // <div>
    // <h1 className="font-bold text-3xl">Tailwind is working</h1>
    // </div>
    <Switch>
      <Route path="/">
        <LandingPageLayout>
          <HomePage />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
