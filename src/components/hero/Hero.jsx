import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { BsImageFill, BsSearch } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomNextArrow from "../common/arrow/CustomNextArrow";
import CustomPrevArrow from "../common/arrow/CustomPrevArrow";
import { staticImages } from "../../images";
import { Header } from "../header/Header";

export const Hero = () => {
  // const settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   variableWidth: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  // };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const heroBanners = [
    {
      id: "banner-1",
      image: staticImages.banner1,
      text: "Capturing Moments, Creating Memories: Let Us Tell Your Story"
    },
    {
      id: "banner-2",
      image: staticImages.banner2,
      text: "Framing Life's Beauty: Discover the Art of Photography"
    },
    {
      id: "banner-3",
      image: staticImages.banner3,
      text: "Elevate Your Visual Story: Where Imagination Meets the Lens"
    },
    {
      id: "banner-4",
      image: staticImages.banner4,
      text: "All your photo collection in one place."
    },
  ];

  return (
    <div className="hero-banner-slider">
      <Slider
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}
        {...settings}
      >
        {heroBanners.map((banner) => {
          return (
            <div className="slider-item" key={banner.id}>
              <section
                className="min-h-screen flex flex-col justify-center"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${banner.image}) center/cover no-repeat`,
                }}
              >
                <div className="md:max-w-[1000px] mx-auto py-12 text-white text-center px-3">
                  <h2 className="xl:text-5xl sm:text-3xl text-2xl max-w-[280px] sm:max-w-[350px] md:max-w-[1000px] mx-auto font-bold font-inter mb-4">
                    {banner.text}
                  </h2>
                  <h4 className="md:text-xl sm:text-base text-sm mt-5 lg:mt-0">
                    Explore your high-quality{" "}
                    <BsImageFill className="inline-flex ms-2" /> photos, all in
                    one place
                  </h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-4 border-b-[1px] border-dark/10 pb-12">
                  <p className="text-white opacity-90 text-base font-inter font-medium">
                    Create an account to upload photos.
                  </p>
                  <Button
                    size="lg"
                    className="bg-transparent rounded text-white  tracking-[1px] border-white border-[1px] hover:bg-white hover:text-dark"
                  >
                    Sign up for free
                  </Button>
                </div>
              </section>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export const Card = ({ title, image }) => {
  return (
    <div className="px-2 group">
      <div className="card text-center relative">
        <div className="image w-60 h-80 overflow-hidden border-[3px] border-white rounded-lg group-hover:border-white default-transition">
          {image && (
            <img
              src={image}
              alt="title"
              className="object-cover w-full h-full default-transition hover:scale-125 hover:rotate-6"
            />
          )}
        </div>
        <h2
          className="mt-5 font-inter uppercase font-semibold tracking-[1px] absolute bottom-4 right-4 bg-white text-dark/70 px-3 rounded-[6px] text-xs py-[4px] flex items-center justify-center group-hover:text-moonstone default-transition"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
};
