import React from "react";
import Greeting from "../components/greeting";
import BoredApi from "../components/RandomActivity";
import EveryPageLayout from "../layouts/EveryPage";

const HomePage = () => {
  return (
    <EveryPageLayout>
      <div className="flex flex-col">
      <Greeting/>
      <BoredApi/>
      </div>
    </EveryPageLayout>
  )
};

export default HomePage;
