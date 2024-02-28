// import { validateEmail } from "@/redux/services/authService";
import { RESET, forgotPassword } from "../../redux/slices/authSlice";
import Loader from "../../components/common/Loader";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaEnvelope, FaKey } from "react-icons/fa6";
import { staticImages } from "../../images";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/header/AuthHeader";
import AuthFooter from "../../components/footer/AuthFooter";

export const Forgetpassword = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState();

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Email field is required");
    }
    // if (!validateEmail(email)) {
    //   return toast.error("Email is not valid");
    // }

    const userData = {
      email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET());
  };
  return (
    <>
      <section className="forgot-password">
        <AuthHeader />
        <div className="containers">
          <div className="grid md:grid-cols-2 grid-cols-1 items-stretch my-16 rounded-2xl overflow-hidden shadow-auth">
            <div className="flex items-center bg-white/60 justify-end xxl:p-12 p-6 relative">
              <img
                src={staticImages.forgot_illus}
                alt="cover"
                className="w-full md:max-w-full max-w-[200px] mx-auto"
              />
            </div>
            <div className="bg-white relative flex flex-col justify-between px-4 py-8 sm:px-7 sm:py-10">
              <div>
                <h3 className="lg:text-2xl text-xl text-center font-semibold text-dark-moonstone mb-4">
                  Forgot Password!
                </h3>
                {isLoading && <Loader />}
                <form className="flex flex-col md:gap-5 gap-3 my-5">
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaEnvelope />
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="bg-pink-gradient text-white rounded  md:min-h-[52px] min-h-[48px] uppercase font-inter font-semibold tracking-[1px] shadow-button2 md:mt-3 mt-1 hover:scale-105 default-transition text-sm sm:text-base"
                  >
                    send email
                  </button>
                </form>
              </div>

              <div className="border-t-[1px] border-dark/10 pt-4">
                <p className=" text-white font-semibold text-lg text-pink-gradient text-center mt-auto">
                  <Link to = "/">PhotoIdol Studio.</Link>
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
