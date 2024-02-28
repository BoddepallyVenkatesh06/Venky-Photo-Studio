import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className=" text-white bg-dark py-10">
        <div className="containers">
          <div className="mb-5">
            <ul className="footer-links pt-2 pb-4 flex justify-center items-center flex-wrap gap-1 [&>*:last-child]:after:hidden">
              <li className="px-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:content-[''] after:bg-moonstone after:right-0 after:translate-x-1/2 lg:text-base text-sm">
                <Link className="font-inter" to="/">
                  All Photos
                </Link>
              </li>
              <li className="px-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:content-[''] after:bg-moonstone after:right-0 after:translate-x-1/2 lg:text-base text-sm">
                <Link className="font-inter" to="/">
                  About Us
                </Link>
              </li>
              <li className="px-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:content-[''] after:bg-moonstone after:right-0 after:translate-x-1/2 lg:text-base text-sm">
                <Link className="font-inter" to="/">
                  Contact
                </Link>
              </li>
              <li className="px-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:content-[''] after:bg-moonstone after:right-0 after:translate-x-1/2 lg:text-base text-sm">
                <Link className="font-inter" to="/">
                  Terms and conditions
                </Link>
              </li>
              <li className="px-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:content-[''] after:bg-moonstone after:right-0 after:translate-x-1/2 lg:text-base text-sm">
                <Link className="font-inter" to="/">
                  Copyright inforation
                </Link>
              </li>
            </ul>
            <p className="font-light py-[2px] text-white/50 opacity-80 text-sm font-inter text-center ">
            California, US &nbsp;|&nbsp; Venky Photo Studio
            </p>
          </div>
          <div className="text-md font-medium text-center border-t-[1px] border-white/5 pt-6">
            &copy; Design and Developed by{" "}
            <span className="text-gray-500 font-bold">Venky Kumar.</span>
          </div>
        </div>
      </footer>
    </>
  );
};
