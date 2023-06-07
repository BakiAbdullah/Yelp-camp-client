import { FaCampground } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/" className="mr-[20px] flex items-center justify-center gap-2">
        <FaCampground size={48} className="text-darkAmber"></FaCampground>
        <span className="font-extrabold text-3xl">Yelp Camp</span>
      </Link>
    </div>
  );
};

export default Logo;