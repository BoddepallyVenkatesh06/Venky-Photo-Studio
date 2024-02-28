import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { staticImages } from "../../images";
import Slider from "react-slick";
import CustomNextArrow from "./arrow/CustomNextArrow";
import CustomPrevArrow from "./arrow/CustomPrevArrow";
import { Card } from "../hero/Hero";

const ContactInfo = () => {
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
    <div className="py-16 text-white bg-blue-gradient min-h-screen flex flex-col justify-center">
      <div className="containers px-3">
        <h3 className="xl:text-3xl text-2xl mb-10 text-center font-bold font-inter">
          Contact & Book Us
        </h3>
        <div className="mt-4 flex items-center flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex gap-4 items-center justify-center">
            <BsCalendar3 size={42} />
            <div>
              <p className="font-inter font-bold text-lg">Book Now</p>
              <span className="text-sm italic">Anytime Available</span>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <AiFillPhone size={48} />
            <div>
              <p className="font-inter font-bold text-lg">Contact No</p>
              <span className="text-sm italic">+977 9840557689</span>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <AiFillFacebook size={52} />
            <div>
              <p className="font-inter font-bold text-lg">Facebook Page</p>
              <span className="text-sm italic">Page link here</span>
            </div>
          </div>
        </div>

        <div className="sm:py-8 py-8 overflow-hidden">
          <div className="overflow-hidden">
            <Slider
              nextArrow={<CustomNextArrow />}
              prevArrow={<CustomPrevArrow />}
              {...settings}
            >
              <Card title="Portrait" image={staticImages.portrait} />
              <Card title="Newborn" image={staticImages.newborn} />
              <Card title="Wedding" image={staticImages.wedding} />
              <Card title="Nature" image={staticImages.nature} />
              <Card title="Maternity" image={staticImages.maternity} />
              <Card title="Maternity" image={staticImages.maternity} />
              <Card title="Fashion" image={staticImages.fash1} />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
