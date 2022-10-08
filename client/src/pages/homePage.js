import React from "react";
import Greeting from "../components/greeting";
import BoredApi from "../components/RandomActivity";
import EveryPageLayout from "../layouts/EveryPage";

const HomePageLayout = () => {
  return (
    <EveryPageLayout>
      <div className="flex flex-col">
      <Greeting/>
      <BoredApi/>
      </div>
    </EveryPageLayout>
  )
};

export default HomePageLayout;
