import { Card, Chip, Typography } from "@material-tailwind/react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineCloudUpload,
  AiOutlineFileImage,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsImages, BsUpload } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { staticImages } from "../../../images";
import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  CardHeader,
  Input,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Recent Uploads",
  "Event",
  "Status",
  "Uploaded At",
  "Actions",
];
const TABLE_ROWS = [
  {
    img: staticImages.wed2,
    name: "John Michael",
    email: "john@creative-tim.com",
    event: "Opening Ceremony 2020",
    status: true,
    date: "23/04/18",
  },
  {
    img: staticImages.wed3,
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    event: "Wedding Event: Jane & Jack",
    status: false,
    date: "23/04/18",
  },
  {
    img: staticImages.nature2,
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    event: "Vacation Visit Photo Shoot",
    status: false,
    date: "19/09/17",
  },
  {
    img: staticImages.nature3,
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    event: "Summer Camp",
    status: true,
    date: "24/12/08",
  },
  {
    img: staticImages.nature4,
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    event: "Engagement Day",
    status: false,
    date: "04/10/21",
  },
];

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col py-5">
        <DashboardContent />
        <Overview />
        <TableData showViewBtn="true" />
      </div>
    </>
  );
};

export const DashboardContent = () => {
  return (
    <>
      <section className="bg-">
        <Card>
          <div
            className="p-8 overflow-hidden rounded-xl"
            style={{
              background: `linear-gradient(90deg, rgba(0, 143, 161, 1) 0%, rgba(0, 188, 212, 0.95) 100%), url(${staticImages.intro_hero}) center/cover no-repeat`,
            }}
          >
            <Typography
              variant="h4"
              className=" capitalize font-semibold font-inter text-white"
            >
              We’ve been waiting for you!
            </Typography>
            <Typography
              variant="h6"
              className="capitalize font-normal text-sm my-3 font-poppins text-white"
            >
              WELCOME TO THE UPLOAD PANEL!
            </Typography>
            {/* <Typography variant="paragraph"></Typography> */}
          </div>
        </Card>
      </section>
    </>
  );
};

export const Overview = () => {
  return (
    <>
      <section className="my-8">
        <Typography
          variant="h5"
          className="font-semibold mb-5 font-inter"
          color="blue-gray"
        >
          Overview & Data
        </Typography>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            color="text-blue-300"
            title="Total Images"
            currentData="100"
            last="Last Month"
            pastData="100"
            icon={<AiOutlineFileImage size={25} />}
          />
          <OverviewCard
            color="text-indigo-300"
            title="Uploads"
            currentData="100"
            last="Last Month"
            pastData="100"
            icon={<AiOutlineCloudUpload size={25} />}
          />
          <OverviewCard
            color="text-red-300"
            title="Likes"
            currentData="10"
            last="Last Month"
            pastData="20"
            icon={<AiOutlineHeart size={25} />}
          />
          <OverviewCard
            color="text-orange-300"
            title="Files"
            currentData="10"
            last="Last Month"
            pastData="20"
            icon={<BsImages size={25} />}
          />
        </div>
      </section>
    </>
  );
};

export const OverviewCard = (props) => {
  return (
    <>
      <Card className="border border-gray-200 flex flex-col gap-2 p-5 bg-white rounded-lg shadow-sm">
        <Typography
          variant="small"
          color="black"
          className={`font-inter text-2xl font-semibold text-gray-700 ${props.color}`}
        >
          {props.title}
        </Typography>
        <Typography variant="h5" color="black" className="font-normal">
          {props.currentData}
        </Typography>
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="small" className="font-normal text-[12px]">
              {props.last}
            </Typography>
            <Typography variant="h6" color="black" className=" font-normal">
              {props.pastData}
            </Typography>
          </div>
          <div className={`${props.color}`}>{props.icon}</div>
        </div>
      </Card>
    </>
  );
};

OverviewCard.propTypes = {
  title: PropTypes.any,
  currentData: PropTypes.any,
  last: PropTypes.any,
  pastData: PropTypes.any,
  color: PropTypes.any,
  icon: PropTypes.any,
};

export const TableData = (props) => {
  return (
    <Card className="h-full w-full overflow-x-scroll">
      <CardHeader floated={false} shadow={false} className="rounded-none p-1">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Uploaded Photos
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about the photos that have been uploaded.
            </Typography>
          </div>
          {props.showViewBtn && (
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button className="bg-moonstone rounded" size="sm">
                view all
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-80">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll p-1">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, event, status, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded me-1">
                          <img
                            src={img}
                            alt={name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            Uploader: {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {event}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status ? "active" : "inactive"}
                          color={status ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-2">
                        <IconButton size="sm" className="rounded" color="blue">
                          <AiFillEdit size={20} />
                        </IconButton>
                        <IconButton size="sm" className="rounded" color="red">
                          <AiFillDelete size={20} />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal font-inter"
        >
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            className="rounded border-[1px] border-moonstone text-moonstone"
            size="sm"
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            className="rounded border-[1px] border-pink text-pink"
            size="sm"
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

TableData.propTypes = {
  showViewBtn: PropTypes.any,
};
