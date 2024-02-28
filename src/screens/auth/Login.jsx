// import { validateEmail } from "@/redux/services/authService";
// import { RESET, login, sendLoginCode } from "@/redux/slices/authSlice";
// import { LogoComponent } from "@/routes";
import { IconButton, Input } from "@material-tailwind/react";
// import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { BsEnvelope, BsFacebook, BsMailbox } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/common/Loader";
import { Link } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { PiSmileySad } from "react-icons/pi";
import AuthHeader from "../../components/header/AuthHeader";
import AuthFooter from "../../components/footer/AuthFooter";
import { staticImages } from "../../images";

export default function Login() {
  return (
    <>
      <section className="login">
        <AuthHeader />
        <div className="containers">
          <div className="grid md:grid-cols-2 grid-cols-1 items-stretch my-16 bg-blue-gradient rounded-2xl shadow-auth overflow-hidden">
            <div className="flex items-center justify-end xxl:p-12 p-6 relative">
              <img
                src={staticImages.login_illus}
                alt="cover"
                className="w-full md:max-w-full max-w-[200px] mx-auto"
              />
            </div>
            <div className="bg-white relative flex flex-col justify-between px-4 py-8 sm:px-7 sm:py-10">
              <div>
                <h3 className="lg:text-2xl text-xl text-center font-semibold text-dark-moonstone mb-4">
                  Login
                </h3>
                <form className="flex flex-col md:gap-5 gap-3 my-5">
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaEnvelope />
                    </span>
                  </div>
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="text"
                      placeholder="Password"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaKey />
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-gradient text-white rounded  md:min-h-[52px] min-h-[48px] uppercase font-inter font-semibold tracking-[1px] shadow-button md:mt-3 mt-1 hover:scale-105 default-transition text-sm sm:text-base"
                  >
                    proceed to login
                  </button>
                </form>
                <div className="text-center font-inter mt-10">
                  <p className="inline opacity-70 sm:text-base text-sm">
                    Don’t you have an account?
                  </p>
                  <Link
                    to="/register"
                    className="text-moonstone font-semibold mx-2 sm:text-base text-sm"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="text-center mt-3 flex items-center justify-center mb-6">
                  <PiSmileySad size={24} />
                  <Link
                    to="/forgetpassword"
                    className="text-dark font-semibold font-inter sm:text-base text-sm ms-2"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
             
              <div className="border-t-[1px] border-dark/10 pt-4">
                <p className=" text-white font-semibold text-lg text-blue-gradient text-center mt-auto">
                <Link to = "/">Venky Studio.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AuthFooter />
      </section>
    </>
  );
}
