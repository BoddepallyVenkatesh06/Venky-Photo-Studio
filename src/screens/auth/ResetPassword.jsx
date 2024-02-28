import { RESET, resetPassword } from "../../redux/slices/authSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordInput } from "./Register";
import Loader from "../../components/common/Loader";
import { FaKey } from "react-icons/fa6";
import AuthHeader from "../../components/header/AuthHeader";
import AuthFooter from "../../components/footer/AuthFooter";
import { staticImages } from "../../images";

import { Link } from "react-router-dom";
const initialState = {
  password: "",
  confirmPassword: "",
};

export const ResetPassword = ({ cover }) => {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;
  // const navigate = useRouter();
  // const { resetToken } = navigate.query;
  const dispatch = useDispatch();

  const { isLoading, isSuccess, message } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();
    if (!confirmPassword || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Password length should be 8 or more");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
    };

    // await dispatch(resetPassword({ userData, resetToken }));
    // await dispatch(RESET());
  };

  // useEffect(() => {
  //   if (isSuccess && message.includes("Password Reset Successful")) {
  //     navigate.push("/auth/login");
  //   }
  // }, [dispatch, navigate, message, isSuccess]);

  return (
    <>
      <section className="reset-password">
        <AuthHeader />
        <div className="containers">
          <div className="grid md:grid-cols-2 grid-cols-1 items-stretch my-16 rounded-2xl overflow-hidden shadow-auth">
            <div className="flex items-center bg-white/60 justify-end xxl:p-12 p-6 relative">
              <img
                src={staticImages.reset_illus}
                alt="cover"
                className="w-full md:max-w-full max-w-[200px] mx-auto"
              />
            </div>
            <div className="bg-white relative flex flex-col justify-between px-4 py-8 sm:px-7 sm:py-10">
              <div>
                <h3 className="lg:text-2xl text-xl text-center font-semibold text-dark-moonstone mb-4">
                  Reset Your Password
                </h3>
                {isLoading && <Loader />}
                <p className="text-custom">Please enter the email address you&apos;d like your password reset information sent to</p>
                <form className="flex flex-col md:gap-5 gap-3 my-5" onSubmit={reset}>
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="email"
                      placeholder="Password"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                      name="password" value={password} onChange={handleInputChange}
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaKey />
                    </span>
                  </div>

                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="email"
                      placeholder="Confirm Password"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                      name="password" value={password} onChange={handleInputChange}
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaKey />
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="bg-pink-gradient text-white rounded md:min-h-[52px] min-h-[48px] uppercase font-inter font-semibold tracking-[1px] shadow-button2 md:mt-3 mt-1 hover:scale-105 default-transition text-sm sm:text-base"
                  >
                    reset password
                  </button>
                </form>
              </div>

              <div className="border-t-[1px] border-dark/10 pt-4">
                <p className=" text-white font-semibold text-lg text-pink-gradient text-center mt-auto">
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
};
