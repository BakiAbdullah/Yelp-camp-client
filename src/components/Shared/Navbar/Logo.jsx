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
          size={48}
          className={`${invert ? "text-white" : "text-darkAmber"}`}
        ></FaCampground>
        <span className="font-extrabold font-archivo text-4xl">Yelp Camp</span>
      </Link>
    </div>
  );
};

export default Logo;
