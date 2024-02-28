import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  const url = useLocation().pathname;
  return (
    <>
      <header
        className="m-0 py-4 w-full rounded-none border-none fixed top-0 left-0 z-50 shadow-none"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))",
        }}
      >
        <div className="flex items-center justify-between text-white max-w-[1400px] mx-auto px-4">
          <Link to="/" className="flex">
            <span className="text-white font-bold xl:text-3xl text-2xl">
            Venky <span className="text-white">Photo.</span>
            </span>
          </Link>

          <div
            className={`flex items-center ${url === "/search" ? "hidden" : ""}`}
          >
            {/* <button type="button" className="lg:hidden">
              <BsSearch size={17} />
            </button> */}
            <form className="fixed top-14 right-0 left-0 px-4 mt-3 lg:mt-0 lg:relative md:left-auto lg:top-0 hidden lg:block">
              <div
                className="flex items-center rounded h-[48px] ps-5 w-full outline-none text-dark bg-white md:min-w-[500px] md:left-0 max-w-full"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 8px",
                }}
              >
                <input
                  type="text"
                  className="h-full focus:caret-moonstone w-full outline-none font-inter text-base font-medium text-dark/60"
                  placeholder="Search photos here ..."
                />
                <button
                  type="submit"
                  className="h-[48px] w-[48px] flex items-center justify-center text-[28px] mx-1 px-3 opacity-50 hover:opacity-90 default-transition"
                >
                  <BsSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="text-sm flex gap-5 items-center">
            <Link
              to="/login"
              className="font-semibold uppercase tracking-[1px] font-inter flex items-center"
            >
              <BiLogInCircle size={18} className="me-[6px]" /> Login
            </Link>
            <Link
              to="/register"
              className="border border-white px-4 py-[8px] rounded font-semibold uppercase tracking-[1px] hover:bg-white hover:text-moonstone transition-all ease-in-out duration-200"
              style={{ boxShadow: "rgba(99, 99, 99, 0.15) 0px 2px 8px 0px" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
