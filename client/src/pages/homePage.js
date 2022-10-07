import React from "react";
import Header from "../components/NavBar";
//import Hero from './../../assests/her.jpg';
import Footer from "../components/footer";

const HomePage = ({ ...otherProps }) => {
  return(

    //wrapper for the whole page
    <div className="min-h-full bg-gray-100 font-body">  
      <div className="h-screen flex flex-col ">
        <Header />












      </div>
      <Footer />
    </div> //end wrapper for the whole page
  ) 
};

export default HomePage;
