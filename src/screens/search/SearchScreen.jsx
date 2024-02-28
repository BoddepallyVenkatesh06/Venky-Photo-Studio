import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { SiMaterialdesign } from "react-icons/si";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import { AiOutlineCrown } from "react-icons/ai";
import { RiAiGenerate } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsArrowClockwise, BsFileEarmarkMinus, BsPeople } from "react-icons/bs";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineSmartScreen } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { CgScreenWide, CgStyle } from "react-icons/cg";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { imagesData, staticImages } from "../../images";
import Masonry from "react-masonry-css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SearchScreen = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <SearchContent />
    </div>
  );
};

export const SearchContent = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  
  return (
    <div>
      <div className="masonary-search flex justify-center flex-col py-32 border-t-2 border-white/30" style={{
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url("${staticImages.hero}") center/cover no-repeat`
      }}>
        <div className="containers flex-col">
          <h4 className="text-center md:text-base text-sm max-w-[780px] mx-auto font-inter  text-white">
            Explore our photo gallery, a visual journey through moments frozen
            in time.
          </h4>
          <form className="flex justify-center items-center border-[1px] border-black/5 w-full max-w-[700px] mx-auto px-6 md:h-[56px] sm:h-[52px] h-[48px] shadow-md shadow-dark/5 rounded font-inter placeholder:opacity-70 mt-4 bg-white">
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Search your image here"
            />
            <button
              type="submit"
              className="h-[40px] inline-flex items-center justify-center text-xl text-rich-black/50"
            >
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column sm:my-9 my-5"
        >
          {imagesData.map((item, index) => (
            <Link to = "/search/1"
              key={index}
              // onClick={() => dispatch(setModalOpen())}
              className="masonry-item hover:scale-[1.02] transition-all duration-200 relative group after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/40 after:opacity-0 after:transition-all after:ease-in-out after:duration-300 hover:after:opacity-100"
            >
              <img src={item.image} alt="" />
              <div className="item-info opacity-0 group-hover:opacity-100 absolute bottom-[12px] left-[12px] transition-all duration-300 ease-in-out flex items-center justify-start z-10">
                <div className="item-info-user w-[36px] h-[36px] rounded-full overflow-hidden me-3">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-fit-cover"
                    alt="avatar"
                  />
                </div>
                <p className="font-medium text-white bg-black/20 px-3 py-1 rounded-full">
                  Marcus Lucas Arthur
                </p>
              </div>
            </Link>
          ))}
        </Masonry>
      </div>
    </div>
  );
};
