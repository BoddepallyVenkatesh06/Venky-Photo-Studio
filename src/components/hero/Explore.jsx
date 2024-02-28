import { Button } from "@material-tailwind/react";
import { AiOutlineLike, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { TitleHeading } from "../common/design/Title";
import PropTypes from "prop-types";
import CustomNextArrow from "../common/arrow/CustomNextArrow";
import CustomPrevArrow from "../common/arrow/CustomPrevArrow";
import Slider from "react-slick";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { imagesData } from "../../images";
import { staticImages } from "../../images";

export const Explore = () => {
  return (
    <>
      <section className="py-12">
        <div className="containers">
          <div className="section-title">
            <h2 className="font-inter text-center font-bold">
              <span className="text-new-blue font-semibold leading-loose text-pink">
                View
              </span>{" "}
              your stored collection
            </h2>
            <p className="text-center text-base text-dark/80 opacity-70">
              The collection of your stock photos or images the reminds your
              beautiful moments.
            </p>
          </div>

          <div className="grid explore-grid-one grid-cols-4 grid-rows-3 xxl:gap-4 md:gap-2 gap-1 mt-12" data-aos="fade-up">
            <Card
              title="Newborn"
              gridClass="xl:col-span-2 row-span-2 md:col-span-3 col-span-4"
              image={staticImages.new1}
            />
            <Card
              title="Wedding"
              gridClass="md:col-span-1 col-span-2"
              image={staticImages.wed1}
            />
            <Card
              title="Dry Leaves"
              gridClass="md:col-span-1 col-span-2"
              image={staticImages.nature1}
            />
            <Card
              title="Maternity"
              gridClass="xl:col-span-1 col-span-2"
              image={staticImages.mat1}
            />
            <Card
              title="Promise"
              gridClass="xl:col-span-1 col-span-2"
              image={staticImages.wed2}
            />
            <Card
              title="Landscape"
              gridClass="col-span-2 md:col-span-1"
              image={staticImages.nature2}
            />
            <Card
              title="Ceremony"
              gridClass="col-span-2 md:col-span-1"
              image={staticImages.mat2}
            />
            <Card
              title="Cuteness"
              gridClass="col-span-2 md:col-span-1"
              image={staticImages.new2}
            />
            <Card
              title="Love & Care"
              gridClass="col-span-2 md:col-span-1"
              image={staticImages.new4}
            />
          </div>
        </div>
      </section>
      <Explore1 />
      <Features />
      <ViewSlider />
      {/* <Explore3 /> */}
      <Explore5 />
      <Explore7 />
    </>
  );
};

export const Explore1 = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-12">
      <div className="containers pb-6">
        <div className="section-title text-start">
          <h2 className="font-inter font-bold">
            <span className="text-new-blue font-semibold leading-loose text-moonstone">
              Colourful
            </span>{" "}
            photo albums of your pick
          </h2>
          <p className="text-base text-dark/80 opacity-70">
            Get the glimpse of the precious moments under the same bundle.
          </p>
        </div>

        <div className="mt-8" data-aos="fade-up">
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            <CardSlanted
              title="Mountain Climbing"
              image={staticImages.nature4}
              styles="rounded-xl"
              show={true}
            />
            <CardSlanted
              title="Holy Marriage"
              image={staticImages.wed4}
              styles="rounded-xl"
              show={true}
            />
            <CardSlanted
              title="Baby Show Ceremony"
              image={staticImages.mat4}
              styles="rounded-xl"
              show={true}
            />
            <CardSlanted
              title="Welcoming new ones"
              image={staticImages.new4}
              styles="rounded-xl"
              show={true}
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export const ViewSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-16 view-slider-sc px-4">
      <div className="containers">
        <div className="border-3 overflow-hidden xl:h-[580px] lg:h-[540px] md:h-[480px] h-[400px] relative">
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            <div className="xl:h-[580px] lg:h-[540px] md:h-[480px] h-[400px] overflow-hidden relative outline-none">
              <img
                src={staticImages.slider1}
                className="object-fit-cover"
                alt=""
              />
              <div className="absolute top-5 w-[280px] px-4 py-5 left-5 bg-white/90 right-5 default-shadow rounded">
                <p className="font-inter text-sm opacity-60">
                  By Marcus Arthur - 16th May, 2023
                </p>
                <p className="mt-1 font-semibold font-inter text-dark">
                  Thanks Giving Day, 2022
                </p>
              </div>
            </div>
            <div className="xl:h-[580px] lg:h-[540px] md:h-[480px] h-[400px] overflow-hidden relative outline-none">
              <img
                src={staticImages.slider2}
                className="object-fit-cover"
                alt=""
              />
              <div className="absolute top-5 w-[280px] px-4 py-5 left-5 bg-white/90 right-5 default-shadow rounded">
                <p className="font-inter text-sm opacity-60">
                  By Marcus Arthur - 16th May, 2023
                </p>
                <p className="mt-1 font-semibold font-inter text-dark">
                  Thanks Giving Day, 2022
                </p>
              </div>
            </div>
            <div className="xl:h-[580px] lg:h-[540px] md:h-[480px] h-[400px] overflow-hidden relative outline-none">
              <img
                src={staticImages.slider3}
                className="object-fit-cover"
                alt=""
              />
              <div className="absolute top-5 w-[280px] px-4 py-5 left-5 bg-white/90 right-5 default-shadow rounded">
                <p className="font-inter text-sm opacity-60">
                  By Marcus Arthur - 16th May, 2023
                </p>
                <p className="mt-1 font-semibold font-inter text-dark">
                  Thanks Giving Day, 2022
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  return (
    <section className="py-16 min-h-screen flex items-center" style ={{
      background: `url("${staticImages.slider_pattern}") center/cover no-repeat`
    }}>
      <div className="containers">
        <div className="section-title text-center">
          <h2 className="font-inter font-bold">
            The{" "}
            <span className="text-new-blue font-semibold leading-loose text-moonstone">
              Colourful
            </span>{" "}
            smartest choice for creatives like you
          </h2>
          <p className="text-base text-dark/80 opacity-70">
            We keep the perfect collection the photos that you upload.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-10 gap-6 pt-14 pb-6">
          <Card1
            icon={<AiOutlineStar size={30} />}
            title="Excellent photo preview"
            desc="Download scroll-stopping images of the best quality to make your projects look professional."
          />
          <Card1
            icon={<AiOutlineLike size={30} />}
            title="Collection in secure manner"
            desc="Access thousands of images and designs ready-to-publish and get your project ready double quick."
          />
          <Card1
            icon={<AiOutlineSearch size={30} />}
            title="Ease of use & access"
            desc="There’s an image and style for every project, whatever your needs are."
          />
          <Card1
            icon={<BsArrowRepeat size={30} />}
            title="Fresh content everyday"
            desc="Our library is updated on a daily basis so you can find the newest and trendiest photos and designs."
          />
        </div>
      </div>
    </section>
  );
};

export const Card = ({ title, image, styles, show, gridClass }) => {
  return (
    <Link
      className={`card shadow rounded overflow-hidden relative ${gridClass} overlay-black-gradient group block`}
    >
      <img
        src={image}
        alt="title"
        className={`w-full h-full object-cover block group-hover:scale-110 group-hover:rotate-6 default-transition`}
      />
      <h2 className="capitalize font-medium mt-5 text-white absolute bottom-0 lg:m-5 m-3 z-30 font-inter">
        {title}
      </h2>
      {show && (
        <div
          className={`${styles} overlay absolute top-0 w-full bg-gray-400 rotate-6 -z-10`}
        ></div>
      )}
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
  styles: PropTypes.any,
  show: PropTypes.any,
  gridClass: PropTypes.string,
};

export const CardSlanted = ({ title, image, styles, show }) => {
  return (
    <Link to = "/search" className="px-2 block">
      <div
        className="card text-start rounded-xl relative group my-3"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <div
          className={`${styles} w-full object-cover overflow-hidden relative after:absolute after:content-[''] after:top-1 after:left-1 after:right-1 after:bottom-1 after:border-white after:border-2 after:rounded-xl`}
        >
          <img
            src={image}
            alt="title"
            className={`${styles} object-cover min-h-[225px] xxl:h-[360px] xxl:w-[240px] w-[180px] h-[280px]`}
          />
        </div>
        <h2 className="capitalize font-medium mt-5 text-white absolute bottom-0 xxl:m-4 m-3 leading-[1.3] xxl:text-base text-[15px] z-30 font-inter">
          {title}
        </h2>
      </div>
    </Link>
  );
};

CardSlanted.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
  styles: PropTypes.any,
  show: PropTypes.any,
  gridClass: PropTypes.string,
};

export const Card1 = ({ title, icon, desc }) => {
  return (
    <div className="box flex gap-7">
      <div className="icon flex items-center justify-center text-white bg-moonstone default-shadow rounded-full w-[72px] min-w-[72px] h-[72px]">
        {icon}
      </div>
      <div className="details">
        <h3 className="text-xl font-semibold mb-2 font-inter text-dark">
          {" "}
          {title}
        </h3>
        <p className="text-base text-black/50 border-[1px] border-moonstone/20 bg-white py-5 px-6 rounded-lg default-shadow hover:-mt-1 default-transition">
          {desc}{" "}
        </p>
      </div>
    </div>
  );
};

Card1.propTypes = {
  title: PropTypes.any,
  icon: PropTypes.any,
  desc: PropTypes.any,
};

export const Explore5 = () => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="containers">
          <div className="section-title">
            <h2 className="font-inter text-center font-bold mb-3">
              Viw Recent uploads from our community
            </h2>
            <p className="text-center text-base text-black opacity-70">
              See the recent pictures that reflect the memories of our community
              users.
            </p>
          </div>
          <div className="mt-6 masonry-wrapper">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column my-9"
            >
              {imagesData.slice(0, 26).map((item) => (
                <Link to = "/search/1"
                  key={item.id}
                  className="block masonry-item hover:scale-[1.02] transition-all duration-200 relative group after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/40 after:opacity-0 after:transition-all after:ease-in-out after:duration-300 hover:after:opacity-100 cursor-pointer"
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
                    <p className="font-medium text-white bg-black/20 px-3 text-sm py-1 rounded-full font-inter">
                      {item.author}
                    </p>
                  </div>
                </Link>
              ))}
            </Masonry>
          </div>
          <div className="flex items-center justify-center">
            <Link
              className="text-center bg-white h-[52px] min-w-[180px] flex items-center justify-center font-inter font-semibold text-lg border-moonstone text-moonstone border-[1px] hover:bg-moonstone hover:text-white default-transition shadow-lg rounded"
              to="/search"
            >
              Explore All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const PhotoCard = ({ image }) => {
  return (
    <div className="">
      <img src={image} alt="" />
    </div>
  );
};

PhotoCard.propTypes = {
  image: PropTypes.any,
};

export const Explore7 = () => {
  return (
    <>
      <section className="py-12">
        <section className="containers">
          <div className="section-title text-start">
            <h2 className="font-inter font-bold">
              The{" "}
              <span className="text-new-blue font-semibold leading-loose text-moonstone">
              inspiration
              </span>{" "}
               gallery
            </h2>
            <p className="text-base text-dark/80 opacity-70">
              Explore curated collections and discover images, moods, and styles
              to ignite your creativity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 md mt-10">
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src={staticImages.nature1}
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src={staticImages.nature2}
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src={staticImages.nature3}
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src={staticImages.nature4}
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src={staticImages.mat3}
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src={staticImages.mat6}
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src={staticImages.nature6}
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src={staticImages.new1}
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src={staticImages.new2}
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src={staticImages.new3}
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src={staticImages.new4}
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src={staticImages.new5}
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src={staticImages.new6}
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src={staticImages.wed3}
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src={staticImages.wed4}
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src={staticImages.wed5}
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src={staticImages.wed6}
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src={staticImages.wed1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
