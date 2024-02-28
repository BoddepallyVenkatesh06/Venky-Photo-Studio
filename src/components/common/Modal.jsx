import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import { BsCalendarDate, BsFillCameraFill } from "react-icons/bs";
import { useState } from "react";
import { setModalClose } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { imagesData } from "../../images";
import { staticImages } from "../../images";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiFillRedEnvelope,
  AiOutlineClose,
} from "react-icons/ai";

const Modal = () => {
  const dispatch = useDispatch();

  // const handleOverlayClick = (e) => {
  //   if (e.target.classList.contains("modal-overlay")) {
  //     dispatch(setModalClose());
  //   }
  // };

  return (
    <div className="fixed modal-overlay w-full h-full left-0 top-0 right-0 bottom-0 bg-black/80 z-50">
      <div className="preview-modal bg-white min-h-[500px] lg:max-w-[600px] max-w-[90vw] absolute top-1/2 -translate-y-1/2 left-1/2 w-full -translate-x-1/2 right-10 bottom-10 z-50 rounded-lg flex flex-col items-center justify-between">
        <button
          type="button"
          className="absolute top-3 right-2 text-dark z-[100]"
          onClick={() => dispatch(setModalClose())}
        >
          <AiOutlineClose size={25} className="text-dark" />
        </button>
        <div className="py-4">
          <img
            src={`${staticImages.modal}`}
            className="max-w-[260px] relative"
            alt=""
          />
        </div>
        <div className="w-full z-10 relative bg-blue-gradient px-3 py-8 text-center text-white">
          <h2 className="text-4xl uppercase font-bold ">book us!</h2>
          <h3 className="leading-[1.3] font-inter font-bold  text-2xl p-3 border-b-[1px] border-white">
            For Wedding & Event Photography
          </h3>
          <p className="font-inter mt-4">
            You can receive upto 40% discount as our special offers.
          </p>
          <div className="flex justify-center items-center mt-2">
            <AiFillPhone />
            <span className="ms-1 italic">+977 984099805</span>
          </div>
          <div className="flex justify-center items-center mt-4">
            <a className="mx-[6px]" href="https://facebook.com">
              <AiFillFacebook size={23} />
            </a>
            <a className="mx-[6px]" href="https://facebook.com">
              <AiFillMail size={24} />
            </a>
            <a className="mx-[6px]" href="https://facebook.com">
              <AiFillInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
};

export default Modal;
