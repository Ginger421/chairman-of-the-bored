import React from "react";
import Greeting from "../components/greeting";
import BoredApi from "../components/RandomActivity";
import EveryPageLayout from "../layouts/EveryPage";

const HomePage = () => {
  return (
    <EveryPageLayout>
      
      <Greeting/>
      <BoredApi/>
      
    </EveryPageLayout>
  )
};

export default HomePage;
