import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import { FaHandPointRight, FaFacebook, FaWindowClose } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import StartUp from "../assets/startup.png";

const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      email
      username
      token
    }
  }
`;

const RegisterModal = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const registerCallback = () => {
    console.log("register callback");
    registerUser();
  };

  const { onChange, onSubmit, values } = useForm(registerCallback, {
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onCompleted(data) {
      console.log("onCompleted");
       window.location.assign("/");
    },

    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values },
  });

  return (
    <div className="z-40">
      <div className="flex items-center justify-center md:z-100 min-h-screen bg-sky-300/60">
        <form action="">
          {/* card container */}
          <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
            {/* left side */}
            <div className="p-6 md-20">
              {/* top content */}
              <h2 className="h2 mb-5 text-4xl font-bold">Sign Up</h2>
              <p className="max-w-sm mb-12 font-light text-gray-600">
                Sign up to get started!
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full h-2 space-y-4 p-6 border border-gray-300 rounded-md placeholder:font-light "
                  placeholder="Username"
                  label="Username"
                  name="username"
                  onChange={onChange}
                />
                <input
                  type="text"
                  className="w-full h-2 space-y-4  p-6 border border-gray-300 rounded-md placeholder:font-light "
                  placeholder="Email"
                  label="Email"
                  name="email"
                  onChange={onChange}
                />
                <input
                  type="text"
                  className="w-full block h-2 space-y-4  p-6 border border-gray-300 rounded-md placeholder:font-light "
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
                  Log In
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
                <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2 ">
                  <FcGoogle />
                  <span className="font-thin">Google</span>
                </button>
              </div>
            </div>

            {/* right side  */}
            <img
              src={StartUp}
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
      {errors.map(function (error) {
        return <div>{error.message}</div>;
      })}
    </div>
  );
};

export default RegisterModal;
