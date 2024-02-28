import React, { useState, useEffect } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  AiOutlineDashboard,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { HiViewGridAdd } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectIsSidebarOpen,
} from "../../redux/slices/sidebarSlice";
import { BsFillImageFill } from "react-icons/bs";

export const ContentSidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const location = useLocation();

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div
      className={`content-sidebar default-transition w-[260px] ${sidebarClass}`}
    >
      <Card className="h-[100vh] default-shadow bg-white">
        <div className="mb-2 p-4 border-b-[1px] border-rich-black/5 flex justify-between">
          <Link href="/">
            <h3 className="text-blue-gradient text-2xl font-bold">
            Venky<span className="text-dark-moonstone">Photo.</span>
            </h3>
          </Link>
          {/* <button type="button">
            <HiOutlineMenuAlt3
              size={22}
              onClick={() => dispatch(setSidebarClose())}
            />
          </button> */}
        </div>
        <List className="px-3">
          <ListItem className="p-0">
            <Link to="/admin" className={`flex p-4 w-full ${location.pathname === "/admin" ? 'active-link' : ""}`}>
              <ListItemPrefix className="w-[20px] flex items-center justify-start">
                <AiOutlineDashboard size={20} />
              </ListItemPrefix>
              Dashboard
            </Link>
          </ListItem>
          <ListItem className="p-0">
            <Link to = "/admin/images" className={`flex p-4 w-full ${location.pathname === "/admin/images" ? 'active-link' : ""}`}>
              <ListItemPrefix className="w-[20px] flex items-center justify-start">
                <BsFillImageFill size={16} />
              </ListItemPrefix>
              Photos
            </Link>
          </ListItem>
          <ListItem className="p-0">
            <Link to = "/admin/gallery" className={`flex p-4 w-full ${location.pathname === "/admin/gallery" ? 'active-link' : ""}`}>
              <ListItemPrefix className="w-[20px] flex items-center justify-start">
                <HiViewGridAdd className="scale-125" />
              </ListItemPrefix>
              Gallery
            </Link>
          </ListItem>
          <ListItem className="p-0">
            <Link to = "/admin/account" className={`flex p-4 w-full ${location.pathname === "/admin/account" ? 'active-link' : ""}`}>
              <ListItemPrefix className="w-[20px] flex items-center justify-start">
                <AiOutlineUser size={20} />
              </ListItemPrefix>
              My Account
            </Link>
          </ListItem>

          {/* <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform  ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 " selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <BsFillImageFill size={17} className="" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal ">Photos</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/sellcontent/dashboard/notyetsubmitted">
                  <ListItem className="">
                    <ListItemPrefix>
                      <BiChevronRight size={20} className="" />
                    </ListItemPrefix>
                    Not yet submitted
                    <ListItemSuffix>
                      <Chip
                        value="14"
                        size="sm"
                        variant="ghost"
                        className="rounded-full "
                      />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/underrevision">
                  <ListItem className="">
                    <ListItemPrefix>
                      <BiChevronRight size={20} className="" />
                    </ListItemPrefix>
                    Under revision
                    <ListItemSuffix>
                      <Chip
                        value="0"
                        size="sm"
                        variant="ghost"
                        className="rounded-full "
                      />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/rejectedfiles">
                  <ListItem className="">
                    <ListItemPrefix>
                      <BiChevronRight size={20} className="" />
                    </ListItemPrefix>
                    Rejections
                    <ListItemSuffix>
                      <Chip
                        value="5"
                        size="sm"
                        variant="ghost"
                        className="rounded-full "
                      />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <ListItem className="">
                  <ListItemPrefix>
                    <BiChevronRight size={20} className="" />
                  </ListItemPrefix>
                  Published
                  <ListItemSuffix>
                    <Chip
                      value="5"
                      size="sm"
                      variant="ghost"
                      className="rounded-full "
                    />
                  </ListItemSuffix>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> */}
          {/* <Accordion
            open={open === 4}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-3 "
              >
                <ListItemPrefix>
                  <AiOutlineUser size={20} />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">
                  Account Setting
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/sellcontent/dashboard/user/profile">
                  <ListItem className="">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Profile
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion> */}
        </List>
      </Card>
    </div>
  );
};
