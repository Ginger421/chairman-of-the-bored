import React, { useState } from "react";
//create and import Logo
// import Logo from './../../public/logo192.png'; //has to be inside src folder
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  }; //end onClick()

  return (
    <header className="bg-teal-700 relative p-2.5">
      <div className="max-w-7xl mx auto flex items-center justify-between">
        <div className="w-14">
          {/* <img src= {Logo} className="w-full" />  */}
        </div>

        <div className="flex text-white font-sans text-base">
          Chairman of the Bored
        </div>

        <div onClick={onClick}>
          className=
          {`
                    md:hidden upperCase
                `}
          Menu icon goes here
        </div>

        <nav
          className={`${!active && "hidden"}
            absolute flex flex-col top-full w-full p-2 left-0 z-20 
            md:static md:w-auto md:flex-col md:flex`}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:m-2">
              <Link className="flex w-full text-base hover:text-white cursor-pointer p-1.5">
                Login
              </Link>
            </li>

            <li className="list-none md:m-2">
              <Link className="flex w-full text-base hover:text-white cursor-pointer p-1.5">
                Create Account
              </Link>
            </li>

            <li className="list-none md:m-2">
              <Link className="flex w-full text-base hover:text-white cursor-pointer p-1.5">
                Page About us?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
