import React, { useState } from "react";
import { HiChevronDoubleDown, HiXCircle } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";
// import Login from './Sandbox'
import Modal from "./Modal";

const Header = () => {
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onClick = () => setActive(!active);

  const modalHandler = () => {
    setShowModal(null);
  };

  return (
    <div className="content-start flex flex-col h-[80px]">
      {showModal && <Modal onShowModal={modalHandler} />}
      <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-rose-700 text-white font-bold z-10">
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
            <NavLink onClick={() => setShowModal(true)}>Login</NavLink>
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
              : "w-full h-screen main flex flex-col justify-center items-center bg-girl bg-auto bg-no-repeat bg-center md:bg-none text-black"
          }
        >
          <li className="py-6 text-4xl">
            <NavLink onClick={onClick}>Home</NavLink>
          </li>
          <li className="py-6 text-4xl">
            <NavLink onClick={() => setShowModal(true)}>Login</NavLink>
          </li>
          <li className="py-6 text-4xl">
            <NavLink onClick={onClick}>Signup</NavLink>
          </li>
          <li className="py-6 text-4xl">
            <NavLink onClick={onClick}>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
