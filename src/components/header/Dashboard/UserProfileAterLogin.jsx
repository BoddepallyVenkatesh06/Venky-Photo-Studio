
import { Typography, Menu, MenuHandler, MenuList, Avatar, MenuItem } from "@material-tailwind/react";
import { BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePoweroff, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { staticImages } from "../../../images";

export const UserProfileAfterLogin = ({ logoutUser, photo, username }) => {
    return (
      <Menu placement="bottom-end">
        <MenuHandler>
          <Avatar src={staticImages.avatar} size="sm" variant="circular" alt={username} className="cursor-pointer" />
        </MenuHandler>
        <MenuList>
          <Link href="/sellcontent/dashboard" className="outline-none">
            <MenuItem className="flex items-center gap-2">
              <AiOutlineDashboard size={18} />
              <Typography variant="small" className="font-normal">
                Dashboard
              </Typography>
            </MenuItem>
          </Link>
          <Link href="/user/profile" className=" outline-none border-none">
            <MenuItem className="flex items-center gap-2">
              <BiUserCircle size={18} />
              <Typography variant="small" className="font-normal">
                My Profile
              </Typography>
            </MenuItem>
          </Link>
          <MenuItem className="flex items-center gap-2">
            <AiOutlineSetting size={18} />
            <Typography variant="small" className="font-normal">
              Edit Profile
            </Typography>
          </MenuItem>
  
          <MenuItem className="flex items-center gap-2">
            <BiHelpCircle size={18} />
            <Typography variant="small" className="font-normal">
              Help
            </Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 " onClick={logoutUser}>
            <AiOutlinePoweroff size={18} />
            <Typography variant="small" className="font-normal">
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };
  
  UserProfileAfterLogin.propTypes = {
    logoutUser: PropTypes.any,
    photo: PropTypes.any,
    username: PropTypes.any
  }
  