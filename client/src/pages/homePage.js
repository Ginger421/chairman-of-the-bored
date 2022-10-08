import React from "react";
import Header from "../components/NavBar";
//import Hero from './../../assests/her.jpg';
import Footer from "../components/footer";

const HomePageLayout = ({ ...otherProps }) => {
  return(

    //wrapper for the whole page
    <div className="min-h-full bg-gray-100 font-body">  
      <div className="h-screen flex flex-col ">
        <Header />
        <div className="
          relative flex item-center justify-center h-full
          bg-cover bg-center bg-fixed bg-no-repeat
        ">
<<<<<<< HEAD
=======
          <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Account Information</h3>
          <div class="flex justify-center">
            <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
              <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Name</li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">Username</li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">Email</li>
            </ul>
          </div> 
>>>>>>> 0beee3db99c1004da9549001bb1b5e11d8146104

          <div class="flex flex-wrap justify-center">
            <img
            src=""
            class="p-1 bg-white border rounded max-w-sm"
            alt="User's profile picture"
          />
          </div>

<<<<<<< HEAD
          <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Account Information</h3>
          <div class="flex justify-center">
            <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
              <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Name</li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">Username</li>
              <li class="px-6 py-2 border-b border-gray-200 w-full">Email</li>
            </ul>
          </div>        
=======


      
        
        
        
>>>>>>> 0beee3db99c1004da9549001bb1b5e11d8146104
        
        </div>
      </div>
      <Footer />
    </div> //end wrapper for the whole page
  ) 
};


<<<<<<< HEAD
HomePage.defaultProps = {
=======
HomePageLayout.defaultProps = {
>>>>>>> 0beee3db99c1004da9549001bb1b5e11d8146104
  heading: "",
};
export default HomePageLayout;
