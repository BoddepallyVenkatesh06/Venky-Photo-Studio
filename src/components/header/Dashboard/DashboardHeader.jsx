import { useState } from "react";
import {
  Drawer,
  Typography,
  Accordion,
  AccordionHeader,
  Textarea,
  Checkbox,
  Input,
  Card,
  Button,
  AccordionBody,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  AiOutlineCloudUpload,
  AiOutlineClockCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BsDot, BsFiletypePsd, BsImages, BsUiChecksGrid } from "react-icons/bs";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { BiTimeFive } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../redux/slices/sidebarSlice";
import { UserProfileAfterLogin } from "./UserProfileAterLogin";
import { Link } from "react-router-dom";

export const DashboardHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white z-50 shadow-md rounded-lg px-3 py-2.5 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="logo flex gap-1 items-center">
              <button
                type="button"
                className="text-dark-moonstone me-4"
                onClick={() => dispatch(toggleSidebar())}
              >
                <HiMenuAlt2 size={22} />
              </button>
              <UploadContent />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineClockCircle
              className="text-dark-moonstone/70"
              size={25}
            />
            <IoNotificationsOutline
              className="text-dark-moonstone/70"
              size={25}
            />
            <UserProfileAfterLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export const UploadContent = () => {
  const [openRight, setOpenRight] = useState(false);
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const rulesData = [
    {
      id: 1,
      title: "Photos",
      icon: <BsImages size={20} />,
      text: [
        {
          title: "Only JPG files Over 0.5MB, up to 80MB",
        },
        {
          title:
            "Photos must be between 2000px and 10000px on any of the sides.",
        },
      ],
    },
  ];
  return (
    <div>
      <button
        onClick={openDrawerRight}
        className="border-[1px] border-pink bg-pink px-8 py-2.5 rounded-md flex items-center gap-2 text-white shadow hover:shadow-lg default-transition ms-auto"
      >
        <AiOutlineCloudUpload size={18} />
        <span className="font-inter">Upload Photo</span>
      </button>

      <Drawer
        placement="right"
        className="shadow-xl overflow-y-scroll upload-drawer"
        open={openRight}
        overlay={false}
        size={600}
      >
        <div className="py-2.5 flex justify-between gap-4 items-center px-4 border-b-[1px] border-gray-200">
          <Typography
            variant="h6"
            className="font-normal text-lg relative font-inter"
          >
            Upload Photo
          </Typography>
          <button
            className="bg-dark text-white p-1.5 rounded flex items-center gap-2"
            onClick={closeDrawerRight}
          >
            <RxCross2 size={20} />
          </button>
        </div>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="px-4 py-2 border-gray-200"
          >
            <Typography className="mr-auto font-normal">
              Technical requirements
            </Typography>
          </AccordionHeader>
          <AccordionBody className="px-4">
            {rulesData.map((item) => (
              <div className="mb-3" key={item.id}>
                <ul className="list-style-none">
                  {item?.text?.map((title, index) => (
                    <li className="flex items-center font-inter" key={index}>
                      <span>
                        <BsDot size={30} />
                      </span>
                      <div className="text-[12px]">{title.title}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
        <div className="w-full px-4">
          <div className="mt-6">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <AiOutlineCloudUpload
                  size={52}
                  className="text-black/30 mb-3"
                />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <Card color="transparent" shadow={false}>
            <form className="mt-8 mb-2">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-sm font-bold mb-2 font-inter"
                  htmlFor="grid-password"
                >
                  Title / Event / Occassion
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="uppercase text-blueGray-600 text-sm font-bold mb-2 font-inter flex items-center"
                  htmlFor="grid-password"
                >
                  category{" "}
                  <Link
                    to="/admin/category"
                    className="flex items-center ms-2 hover:text-rich-black default-transition"
                  >
                    <AiFillPlusCircle size={22} />
                  </Link>
                </label>
                <select
                  type="text"
                  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter"
                >
                  <option value="">Wedding</option>
                  <option value="">Nature</option>
                  <option value="">Maternity</option>
                  <option value="">New born</option>
                </select>
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-sm font-bold mb-2 font-inter"
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter resize-none"
                  rows="3"
                ></textarea>
              </div>
              <Button color="green" fullWidth className="py-3 text-base">
                upload
              </Button>
            </form>
          </Card>
        </div>
      </Drawer>
    </div>
  );
};
