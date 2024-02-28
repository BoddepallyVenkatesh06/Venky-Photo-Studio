import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button
} from "@material-tailwind/react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { AiFillCheckCircle, AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { staticImages } from "../../../images";

export function Account() {
  return (
    <div className="my-6 shadow bg-white rounded-lg">
      <Tabs value="profile">
        <TabsHeader>
          <Tab className="py-2.5" value="profile">
            <div className="flex items-center gap-2">
              {React.createElement(UserCircleIcon, {
                className: "w-5 h-5",
              })}
              My Profile
            </div>
          </Tab>
          <Tab className="py-2.5" value="edit">
            <div className="flex items-center gap-2">
              {React.createElement(AiOutlineEdit, { className: "w-5 h-5" })}
              Edit Profile
            </div>
          </Tab>
          <Tab className="py-2.5" value="settings">
            <div className="flex items-center gap-2">
              {React.createElement(Cog6ToothIcon, { className: "w-5 h-5" })}
              Settings
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody className="pb-10 pt-4">
          <TabPanel value="profile">
            <div className="flex flex-col gap-5 xxl:flex-row xxl:3 xxl:items-start">
              <Card className="w-96 min-w-[280px]">
                <CardHeader floated={false} className="h-60">
                  <img src={ staticImages.user} alt="profile-picture" className="w-full h-full object-cover" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    Marcus Arthur
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    @marcus
                  </Typography>
                </CardBody>
              </Card>

              <div className="flex-auto lg:px-10 py-10 pt-0">
                <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase" >
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Fullname
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="lucky.jesse" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Email address
                        </label>
                        <input type="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="jesse@example.com" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                          Password
                        </label>
                        <input type="password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="XXXXXXXX" readOnly />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    More Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Address
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="Dhobihgat lalitpur, Kathmandu" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Phone No.
                        </label>
                        <input type="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="New York" readOnly  />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Role
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="Guest" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter flex items-center" htmlFor="grid-password">
                          Verified <AiFillCheckCircle size={18} className="ms-2 text-green-400" />
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="Verified" readOnly />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase font-inter">
                    Bio
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          About me
                        </label>
                        <textarea type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter resize-none" rows="4" readOnly defaultValue={"This is me and this information is all about me because me wants to be friend with you."}></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="edit">
          <div className="flex flex-col gap-5 xxl:flex-row xxl:3 xxl:items-start">
              <Card className="w-96 min-w-[280px]">
                <CardHeader floated={false} className="h-60">
                  <img src={ staticImages.user} alt="profile-picture" className="w-full h-full object-cover" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    Marcus Arthur
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    @marcus
                  </Typography>
                </CardBody>
              </Card>

              <div className="flex-auto lg:px-10 py-10 pt-0">
                <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase" >
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Fullname
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="lucky.jesse" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Email address
                        </label>
                        <input type="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="jesse@example.com" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                          Password
                        </label>
                        <input type="password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="XXXXXXXX" readOnly />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    More Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Address
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="Dhobihgat lalitpur, Kathmandu" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Phone No.
                        </label>
                        <input type="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="New York" readOnly  />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          Role
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="Guest" readOnly />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter flex items-center" htmlFor="grid-password">
                          Verified <AiFillCheckCircle size={18} className="ms-2 text-green-400" />
                        </label>
                        <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter" defaultValue="Verified" readOnly />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase font-inter">
                    Bio
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-1">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-inter" htmlFor="grid-password">
                          About me
                        </label>
                        <textarea type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150 outline-none shadow-none border-[1px] border-gray-200 bg-whitesmoke font-medium font-inter resize-none" rows="4" readOnly defaultValue={"This is me and this information is all about me because me wants to be friend with you."}></textarea>
                      </div>
                    </div>
                  </div>
                  <Button variant="outlined" className="px-8 text-sm font-inter text-moonstone border-moonstone hover:bg-moonstone">update info</Button>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="settings">nmn456459</TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
