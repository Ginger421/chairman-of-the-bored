import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import Chairman from "../assets/chairman.png";
import { FaHandPointRight, FaFacebook, FaWindowClose } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import GoogleButton from "./GoogleButton";

const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

const LoginModal = (props) => {
  let navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  const loginCallback = () => {
    loginUser();
  };

  const { onChange, onSubmit, values } = useForm(loginCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onCompleted(data) {
      console.log("onCompleted");
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
  });

  return (
    <div className="z-40">
      <div className="flex items-center justify-center md:z-100 min-h-screen bg-sky-300/60">
        <form>
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
                  label="Email"
                  name="email"
                  onChange={onChange}
                />
                <input
                  type="text"
                  className="w-full space-y-4  p-6 border border-gray-300 rounded-md placeholder:font-light "
                  placeholder="Password"
                  label="Password"
                  name="password"
                  onChange={onChange}
                />
              </div>

              {/* Middle Content */}
              <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <div
                  className="font-thin text-cyan-700 cursor-pointer"
                  onClick={props.SwitchModal}
                >
                  Sign Up
                </div>
                <button
                  onClick={onSubmit}
                  className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 "
                >
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
                {/* <GoogleButton /> */}
                <button
                  id="google-signin"
                  className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 "
                >
                  <FcGoogle />
                  <span className="font-thin">Google</span>
                </button>
              </div>
            </div>

            {/* right side  */}
            <img
              src={Chairman}
              alt=""
              className="w-[430px] hidden md:block rounded-2xl"
            />
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
