import React from "react";
import Greeting from "../components/greeting";
import BoredApi from "../components/BoredApi";
import EveryPageLayout from "../layouts/EveryPage";
import LeaderBoard from "../components/LeaderBoard";

const HomePage = () => {
  return (
    <EveryPageLayout>
      <div className="flex flex-col h-screen bg-girl bg-cover bg-center">
      <Greeting/>
      <BoredApi/>
      <LeaderBoard/>
      </div>
    </EveryPageLayout>
  )
};

export default HomePage;
