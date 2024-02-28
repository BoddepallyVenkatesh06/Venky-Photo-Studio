import {
  RESET,
  loginWithCode,
  sendLoginCode,
} from "../../redux/slices/authSlice";
import Loader from "../../components/common/Loader";
import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthHeader from "../../components/header/AuthHeader";
import AuthFooter from "../../components/footer/AuthFooter";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { staticImages } from "../../images";

export const LoginWithOTP = ({ cover }) => {
  // const router = useRouter();
  // const { email } = router.query;
  // const dispatch = useDispatch();
  // const navigate = useRouter();

  const [loginCode, setLoginCode] = useState("");

  const { isLoading, isSuccess, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const senduserLoginCode = async () => {
    // await dispatch(sendLoginCode(email));
    // await dispatch(RESET());
  };

  const loginUserWithCode = async (e) => {
    e.preventDefault();
    if (loginCode === "") {
      return toast.error("Please enter OTP Code");
    }
    if (loginCode.length !== 6) {
      return toast.error("OTP code must be 6 characters");
    }

    const code = {
      loginCode,
    };

    // await dispatch(loginWithCode({ code, email }));
  };

  // useEffect(() => {
  //   if (isSuccess && isLoggedIn) {
  //     navigate.push("/");
  //   }
  //   dispatch(RESET());
  // }, [dispatch, isLoggedIn, isSuccess, navigate]);

  return (
    <>
      <section className="login-with-otp">
        <AuthHeader />
        <div className="containers">
          <div className="grid md:grid-cols-2 grid-cols-1 items-stretch my-16 bg-blue-gradient rounded-2xl shadow-auth overflow-hidden">
            <div className="flex items-center justify-end xxl:p-12 p-6 relative">
              <img
                src={staticImages.otp_illus}
                alt="cover"
                className="w-full md:max-w-full max-w-[200px] mx-auto"
              />
            </div>
            <div className="bg-white relative flex flex-col justify-between px-4 py-8 sm:px-7 sm:py-10">
              <div>
                <h3 className="lg:text-2xl text-xl text-center font-semibold text-dark-moonstone mb-4">
                  Login with OTP
                </h3>
                {isLoading && <Loader />}
                <form
                  className="flex flex-col md:gap-5 gap-3 my-5"
                  onSubmit={loginUserWithCode}
                >
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                      name="logincode"
                      value={loginCode}
                      onChange={(e) => setLoginCode(e.target.value)}
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaHashtag />
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-gradient text-white rounded md:min-h-[52px] min-h-[48px] uppercase font-inter font-semibold tracking-[1px] shadow-button md:mt-3 mt-1 hover:scale-105 default-transition text-sm sm:text-base"
                  >
                    Login
                  </button>
                </form>
                <div className="text-center font-inter mt-10">
                  <Link
                    href="/register"
                    className="text-moonstone font-semibold mx-2 sm:text-base text-sm"
                  >
                    Resend Code
                  </Link>
                </div>
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
