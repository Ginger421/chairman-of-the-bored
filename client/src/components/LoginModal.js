import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";
// import Auth from "../utils/auth";
import Chairman from "../assets/chairman.png";
import { FaHandPointRight, FaFacebook, FaWindowClose } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginModal = (props) => {
  // const [loginData, setLoginData] = useState({ email: "", password: "" });
  // const [validated] = useState(false);

  // const [login, { error }] = useMutation(LOGIN_USER);

  // const userInputHandler = (event) => {
  //   const { name, value } = event.target;
  //   setLoginData({ ...loginData, [name]: value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   try {
  //     const { data } = await login({
  //       variables: { ...loginData },
  //     });
  //     Auth.login(data.login.token);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoginData({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  // };
  
  // this goes in the form tag below
// noValidate validated={validated} onSubmit={handleSubmit}
  return (
    <div>
      <div className="flex items-center justify-center md:z-100 min-h-screen bg-rose-50">
        <form >
          <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
            {/* left side */}
            <div className="p-6 md-20">
              {/* top content */}
              <h2 className="h2 mb-5 text-4xl font-bold cursor-pointer">
                Login
              </h2>
              <p className="max-w-sm mb-12 font-light text-gray-600">
                Login to see your saved activities!
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full space-y-4 p-6 border border-gray-300 rounded-md placeholder:font-light "
                  placeholder="Email"
                  // onChange={userInputHandler}
                  // value={loginData.email}
                />
                <input
                  type="text"
                  className="w-full space-y-4  p-6 border border-gray-300 rounded-md placeholder:font-light "
                  placeholder="Password"
                  // onChange={userInputHandler}
                  // value={loginData.password}
                />
              </div>

              {/* Middle Content */}
              <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <div
                  className="font-thin text-cyan-700 cursor-pointer"
                  // onClick={props.SwitchModal}
                >
                  Sign Up
                </div>
                {/* this goes in the button below */}
                {/* disabled={!loginData.email && loginData.password} */}
                <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 ">
                  <span>Next</span>
                  <FaHandPointRight />
                </button>
              </div>
              {/* Border */}
              <div className="mt-12 border-b border-b-gray-300"> </div>
              {/* Bottom Content */}
              <p className="py-6 text-sm font-thin text-center text-gray-400">
                You can also login with
              </p>
              <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 ">
                  <FaFacebook />
                  <span className="font-thin">Facebook</span>
                </button>
                <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 ">
                  <FcGoogle />
                  <span className="font-thin">Google</span>
                </button>
              </div>
            </div>

            {/* right side  */}
            <img src={Chairman} alt="" className="w-[430px] hidden md:block" />
            {/* Close button */}
            <div className="group absolute -top-5 right-4 md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
              <FaWindowClose
                onClick={props.onShowModal}
                className="group-hover:text-gray-600"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
