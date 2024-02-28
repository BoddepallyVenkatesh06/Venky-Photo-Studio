import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
// import Link from "next/link";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsCheckAll, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
// import { RESET, register, sendVerificationEmail } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
// import { validateEmail } from "@/redux/services/authService";
import { Link } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa6";
import { PiSmileySad } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import AuthHeader from "../../components/header/AuthHeader";
import AuthFooter from "../../components/footer/AuthFooter";
import { staticImages } from "../../images";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useMemo } from "react";

const initialSate = {
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

export default function Register({ cover }) {
  // const navigate = useRouter();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isLoggedIn } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState(initialSate);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeCountryHandler = (value) => {
    setCountry(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, password, email, confirmPassword } = formData;

  const wrongIcon = <BsCheckAll size={18} />;
  const checkIcon = <BsCheckAll size={18} className="text-green-500" />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return wrongIcon;
  };

  useEffect(() => {
    //check lowercase and uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }
    //check for number
    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    // Check for special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSpecialChar(true);
    } else {
      setSpecialChar(false);
    }
    // Check for PASSWORD LENGTH
    if (password.length > 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  const registerUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Password length should be 8 or more");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    // if (!validateEmail(email)) {
    //   return toast.error("Email is not valid");
    // }
    const userData = {
      name,
      email,
      password,
    };
    // await dispatch(register(userData));
    // await dispatch(sendVerificationEmail());
  };

  // useEffect(() => {
  //   if (isSuccess && isLoggedIn) {
  //     navigate.push("/");
  //   }

  //   dispatch(RESET());
  // }, [dispatch, isLoggedIn, isSuccess, navigate]);

  return (
    <section className="register">
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
                Register Here!
              </h3>
              {isLoading && <Loader />}
              <form
                className="flex flex-col md:gap-5 gap-3 my-5"
                onSubmit={registerUser}
              >
                <div className="border-b-[1px] text-base flex items-stretch form-element">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="username"
                  />
                  <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                    <FaUserAlt />
                  </span>
                </div>

                <div className="border-b-[1px] text-base flex items-stretch form-element">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                  <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                    <FaEnvelope />
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3 lg:gap-y-0">
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                      onChange={handleInputChange}
                      name="password"
                      value={password}
                      autoComplete="new-password"
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaKey />
                    </span>
                  </div>
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full md:h-[48px] h-[42px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90 text-sm sm:text-base"
                      onChange={handleInputChange}
                      name="confirmPassword"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onPaste={(e) => {
                        e.preventDefault();
                        toast.error("Cannot paste into input field");
                        return false;
                      }}
                    />
                    <span className="w-[48px] md:h-[48px] h-[42px] flex items-center justify-center text-dark-blue">
                      <FaKey />
                    </span>
                  </div>
                </div>
                <div className="border-b-[1px] text-base flex items-stretch form-element">
                  <Select
                    name="country"
                    className="w-full"
                    options={options}
                    value={country}
                    placeholder="Select a country"
                    onChange={changeCountryHandler}
                    isSearchable={true}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-gradient text-white rounded md:min-h-[52px] min-h-[48px] uppercase font-inter font-semibold tracking-[1px] shadow-button md:mt-3 mt-1 hover:scale-105 default-transition text-sm sm:text-base"
                >
                  proceed to register
                </button>
              </form>
              <div className="text-center font-inter mt-10">
                <p className="inline opacity-70 sm:text-base text-sm">
                  Already have an account?
                </p>
                <Link
                  href="/login"
                  className="text-moonstone font-semibold mx-2 sm:text-base text-sm"
                >
                  Log in
                </Link>
              </div>

              <ul className="my-3 grid grid-cols-1 lg:grid-cols-2 gap-3 pb-4">
                <li
                  className={`text-[12px] font-inter shadow py-[6px] px-2 rounded-sm border-moonstone/70 border-l-4 ${
                    upperCase ? "text-green-500" : "text-gray-500"
                  } flex items-center gap-2`}
                >
                  {switchIcon(upperCase)}
                  Lowercase & Uppercase
                </li>
                <li
                  className={`text-[12px] font-inter shadow py-[6px] px-2 rounded-sm border-moonstone/70 border-l-4 ${
                    number ? "text-green-500" : "text-gray-500"
                  } flex items-center gap-2`}
                >
                  {switchIcon(number)}
                  Number (0-9)
                </li>
                <li
                  className={`text-[12px] font-inter shadow py-[6px] px-2 rounded-sm border-moonstone/70 border-l-4 ${
                    specialChar ? "text-green-500" : "text-gray-500"
                  } flex items-center gap-2`}
                >
                  {switchIcon(specialChar)}
                  Special Character (!@#$%^&*)
                </li>
                <li
                  className={`text-[12px] font-inter shadow py-[6px] px-2 rounded-sm border-moonstone/70 border-l-4 ${
                    passwordLength ? "text-green-500" : "text-gray-500"
                  } flex items-center gap-2`}
                >
                  {switchIcon(passwordLength)}
                  At least 8 Character
                </li>
              </ul>
            </div>

            <div className="border-t-[1px] border-dark/10 pt-4">
              <p className=" text-white font-semibold text-lg text-pink-gradient text-center mt-auto">
                <Link to="/">Venky Studio.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </section>
  );
}

export const PasswordInput = ({
  fieldName,
  value,
  name,
  onChange,
  onPaste,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="input">
        <label className="block my-2 text-sm font-medium text-gray-900">
          {fieldName}
        </label>

        <div className="relative">
          <Input
            color="red"
            label={placeholder}
            type={showPassword ? "text" : "password"}
            value={value}
            name={name}
            onChange={onChange}
            onPaste={onPaste}
            icon={
              <div onClick={togglePassword}>
                {showPassword ? (
                  <AiFillEyeInvisible size={25} />
                ) : (
                  <AiFillEye size={25} />
                )}
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};
