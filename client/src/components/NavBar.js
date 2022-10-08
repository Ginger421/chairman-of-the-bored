import React, { useState } from "react";
import { HiChevronDoubleDown, HiXCircle } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const onClick = () => setActive(!active);

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-6 bg-teal-500 text-white font-bold z-10 container items-end">
      <div className="flex text-2xl">
        Chairman of the Bored
        <span>
          <FcBusinessman size={40} className="inline-flex ml-4" />
        </span>
      </div>
      <ul className="hidden  md:flex md:space-x-4">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Login</NavLink>
        </li>
        <li>
          <NavLink>Signup</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
      </ul>

      <div onClick={onClick} className="md:hidden z-100">
        {!active ? <HiChevronDoubleDown /> : <HiXCircle />}
      </div>
      <ul
        className={
          !active
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen main flex flex-col justify-center items-center bg-girl bg-auto bg-no-repeat bg-center md:bg-none text-black"
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={onClick}>
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={onClick} >
            Login
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={onClick} >
            Signup
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={onClick} >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
