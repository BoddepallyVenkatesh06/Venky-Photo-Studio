import ImageGallery from "react-image-gallery";
import { imagesData, staticImages } from "../../images";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { List, ListItem } from "@material-tailwind/react";
import {
  BsCalendarDate,
  BsEye,
  BsFillCameraFill,
  BsShare,
} from "react-icons/bs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactInfo from "../../components/common/ContactInfo";

const DetailsPage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const images = [
    {
      original: staticImages.img1,
      thumbnail: staticImages.img1,
    },
    {
      original: staticImages.img2,
      thumbnail: staticImages.img2,
    },
    {
      original: staticImages.img3,
      thumbnail: staticImages.img3,
    },
    {
      original: staticImages.img4,
      thumbnail: staticImages.img4,
    },
    {
      original: staticImages.img5,
      thumbnail: staticImages.img5,
    },
    {
      original: staticImages.img6,
      thumbnail: staticImages.img6,
    },
  ];

  return (
    <>
      <div className="flex px-3 py-12 mt-10">
        <div className="containers w-full bg-white">
          <div className="grid xl:grid-cols-[auto_340px] gap-12">
            <div>
              <div className="px-2 flex items-center justify-between border-b-[1px] border-black/10 py-4 w-full">
                <div className="flex items-center">
                  <div className="rounded-full w-[40px] h-[40px] overflow-hidden me-3 bg-green-700">
                    <img
                      src="/src/assets/images/user.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-black/70 font-inter">
                      Marcus Arthur
                    </span>{" "}
                    <span className="text-xs font-inter">@marcus</span>
                  </div>
                </div>
                <div className="flex items-center flex-wrap">
                  <p className=" font-semibold lg:inline-flex items-center font-inter text-black/70 flex text-sm">
                    <span className="me-3 inline-flex items-center">
                      <BsEye className="me-2" size={18} />
                      Views
                    </span>
                    <span>120</span>
                  </p>
                  <p className="ms-4 font-semibold text-sm lg:inline-flex items-center font-inter text-black/70 flex">
                    <Link to="/" className="inline-flex items-center">
                      <BsShare className="me-2" size={18} />
                      Share
                    </Link>
                  </p>
                </div>
              </div>
              <div className="my-4">
                <ImageGallery items={images.slice(0, 3)} />
              </div>
              <div className="image-description border-t-[1px] border-black/5 py-5 px-2">
                <p className="mb-2 font-semibold text-lg">
                  Charming Beauty of the Nature
                </p>
                <p className="font-inter">
                  A beautiful and ancient spring fed canyon which weaves its way
                  throught 400 meter.
                </p>

                <ul className="mt-4 pt-3 border-t-[1px] border-t-gray-200">
                  <li className="flex items-center my-2">
                    <span className="me-3 text-gray-800">
                      <BsCalendarDate size={16} />
                    </span>
                    <span className="text-base font-inter text-dark">
                      Uploaded on June 23, 2023
                    </span>
                  </li>
                  <li className="flex items-center my-2">
                    <span className="me-3 text-gray-800">
                      <BsFillCameraFill size={19} />
                    </span>
                    <span className="text-base font-inter text-dark">
                      Full HD Quality
                    </span>
                  </li>
                </ul>
              </div>
              <CommentsForm />
              <Comments />
            </div>
            <div className="py-6">
              <div>
                <h3 className="font-inter text-lg font-medium">Categories</h3>
                <List className="flex xs:flex-row flex-wrap gap-x-5 px-0  flex-col">
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    Maternity
                  </ListItem>
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    Nature
                  </ListItem>
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    Landscapes
                  </ListItem>
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    Wedding
                  </ListItem>
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    Tours & Travels
                  </ListItem>
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    Seminars
                  </ListItem>
                  <ListItem className="py-1 my-0 rounded-none text-sm sm:text-base w-auto">
                    New Trends
                  </ListItem>
                </List>
              </div>
              <div className="my-6">
                <h3 className="font-inter text-lg font-medium">
                  Latest Photos
                </h3>
                <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3">
                  {imagesData.slice(0, 24).map((image) => {
                    return <RelatedItem key={image.id} data={image} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default DetailsPage;

export const CommentsForm = () => {
  return (
    <div className="flex flex-col px-3">
      <h2 className="pt-3 pb-2 text-dark text-lg font-semibold font-inter">
        Add a new comment
      </h2>
      <form className="w-full">
        <textarea
          className="bg-white rounded border border-gray-300 resize-none w-full h-24 p-3 placeholder-gray-500 font-inter text-sm focus:outline-none focus:bg-white"
          name="body"
          placeholder="Type Your Comment"
          required
        ></textarea>
        <Button className="mt-2 rounded font-inter">Send Your Comment</Button>
      </form>
    </div>
  );
};

export const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "John Doe",
      image: staticImages.user,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, odio.",
    },
    {
      id: 2,
      name: "Sarah Winston",
      image: staticImages.wed1,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati consequuntur veniam facilis dolorem nulla magnam blanditiis labore iste rem?",
    },
    {
      id: 3,
      name: "Rajesh Hamal",
      image: staticImages.nature1,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique sapiente corporis natus!",
    },
  ];
  return (
    <div className="pb-12 px-3 mt-10">
      <h2 className="text-dark text-lg font-semibold font-inter mb-6">
        Some recent comments
      </h2>
      <div className="grid gap-6">
        {comments.map((comment) => (
          <CommentsItem key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
};
export const CommentsItem = (props) => {
  return (
    <div className="flex items-start space-x-2 gap-2">
      <div className="flex w-[40px] h-[40px] min-w-[40px]">
        <img
          src={props.data.image}
          alt=""
          className="object-cover rounded-full"
        />
      </div>
      <div className="bg-gray-100 w-auto rounded-xl p-3 border-gray-200 border-[1px]">
        <div className="font-medium mb-1">
          <span className="hover:underline font-inter text-sm">
            {props.data.name}
          </span>
          <span className="hover:underline font-inter text-xs ms-2 text-gray-600">
            3 days ago
          </span>
        </div>
        <div className="text-sm font-inter">{props.data.comment}</div>
      </div>
    </div>
  );
};

CommentsItem.propTypes = {
  data: PropTypes.any,
};

export const RelatedItem = (props) => {
  return (
    <article className="rounded-xl bg-white p-1 hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded h-[140px]">
          <img src={props.data.image} className="w-full h-full object-cover" />
        </div>
      </a>
    </article>
  );
};

RelatedItem.propTypes = {
  data: PropTypes.any,
};
