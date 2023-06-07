import { Link } from "react-router-dom";
import { BsWechat } from "react-icons/bs";

const NavBottom = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm dark:bg-gray-800">
        <div className="container flex items-center gap-5 lg:gap-0 justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="#"
            className="text-darkGray font-semibold hover:text-lightAmber duration-300 dark:text-gray-200 border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 mx-1.5 sm:mx-6"
          >
            home
          </Link>
          <Link
            href="#"
            className="text-darkGray font-semibold hover:text-lightAmber duration-300 dark:text-gray-200 border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 mx-1.5 sm:mx-6"
          >
            Instructors
          </Link>
          <Link
            href="#"
            className="text-darkGray font-semibold hover:text-lightAmber duration-300 dark:text-gray-200 border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 mx-1.5 sm:mx-6"
          >
            Classes
          </Link>

          <Link
            href="#"
            className="text-darkGray font-semibold hover:text-lightAmber duration-300 dark:text-gray-200 border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 mx-1.5 sm:mx-6"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-darkGray font-semibold hover:text-lightAmber duration-300 dark:text-gray-200 border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 mx-1.5 sm:mx-6"
          >
            Workshops
          </Link>

          <div className="hidden lg:flex">
            <span className="border-l-2 border-lightGray">
              <BsWechat className="ml-5 text-darkAmber" size={35}></BsWechat>
            </span>
            <div className="w-auto lg:ml-[15px] gap-1 flex-col items-center">
              <p className="font-bold text-lightGray text-sm">
                Call Anytime
              </p>
              <p className="font-semibold text-sm text-lightGray">
                +1-(100)-333-0055
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBottom;
