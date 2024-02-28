import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <div className="md:pt-6 pt-2 lg:-mb-5 -mb-10">
      <div className="containers">
        <Link to="/">
          <p className="text-center xxl:text-4xl md:text-3xl text-2xl font-bold">
          Venky <span className="text-pink-gradient">Photo.</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AuthHeader;
