import { FaCampground } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = ({ invert, center }) => {
  return (
    <div>
      <Link
        to="/"
        className={`flex items-center ${
          center ? "justify-center " : "justify-start"
        }`}
      >
        <FaCampground
          className={`text-3xl lg:text-5xl ${invert ? "text-white" : "text-darkAmber"}`}
        ></FaCampground>
        <span className="font-extrabold font-archivo text-darkGray text-xl lg:text-3xl">Yelp Camp</span>
      </Link>
    </div>
  );
};

export default Logo;
