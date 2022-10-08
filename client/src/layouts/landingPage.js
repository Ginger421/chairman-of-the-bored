import React from "react";
import Header from "../components/NavBar";
//import Hero from './../../assests/her.jpg';
import Footer from "../components/footer";

const LandingPageLayout = ({ heading, ...otherProps }) => {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col ">
       

        <div
          className="
                    relative flex item-center justify-center h-full
                    bg-cover bg-center bg-fixed bg-no-repeat
                "
          style={
            {
              // backgroundImage: `url(${Hero})`
            }
          }
        >
          {heading && (
            <h1
              className="
                        relative px-2.5 text-white uppercase z-10 txt-xl text-center md:text-6xl
                    "
            >
              {heading}
            </h1>
          )}

          <div
            className="
                            z-0 absolute -top-0 -left-0 h-full bg-black opacity-40
                        "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

LandingPageLayout.defaultProps = {
  heading: "",
};

export default LandingPageLayout;
