import React from "react";
import { Switch,Route } from 'react-router-dom';
//layouts
import LandingPageLayout from "./layouts/LandingPage";



function App() {
  return (
    // <div>
    // <h1 className="font-bold text-3xl">Tailwind is working</h1>
    // </div>
    <Switch>
      <Route path="/">
        <LandingPageLayout>

        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
