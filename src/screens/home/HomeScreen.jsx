import { Explore } from "../../components/hero/Explore";
import { Hero } from "../../components/hero/Hero";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/slices/modalSlice";
import Modal from "../../components/common/Modal";
import ContactInfo from "../../components/common/ContactInfo";


export const HomeScreen = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <>
      {isModalOpen && <Modal />}
      <Hero />
      <Explore />
      <ContactInfo />
    </>
  );
};
