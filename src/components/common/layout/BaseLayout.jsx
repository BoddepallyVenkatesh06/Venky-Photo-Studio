import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.any
}
