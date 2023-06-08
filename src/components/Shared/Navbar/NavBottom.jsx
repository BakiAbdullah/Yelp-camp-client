import { NavLink } from "react-router-dom";
import { BsWechat } from "react-icons/bs";
import Sticky from "react-stickynode";

const NavBottom = () => {
  return (
    <div>
      <Sticky enabled={true} top={0} bottomBoundary={500}>
        <nav className="bg-white shadow-sm dark:bg-gray-800">
          <div className="container flex items-center gap-3 lg:gap-0 justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lightAmber font-semibold border-b-2 border-darkAmber "
                  : "hover:text-lightAmber border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 text-darkGray font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
              }
            >
              home
            </NavLink>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive
                  ? "text-lightAmber font-semibold border-b-2 border-darkAmber "
                  : "hover:text-lightAmber border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 text-darkGray font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
              }
            >
              Instructors
            </NavLink>
            <NavLink
              to="/allClasses"
              className={({ isActive }) =>
                isActive
                  ? "text-lightAmber font-semibold border-b-2 border-darkAmber "
                  : "hover:text-lightAmber border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 text-darkGray font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
              }
            >
              Classes
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lightAmber font-semibold border-b-2 border-darkAmber "
                  : "hover:text-lightAmber border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 text-darkGray font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/workshop"
              className={({ isActive }) =>
                isActive
                  ? "text-lightAmber font-semibold border-b-2 border-darkAmber "
                  : "hover:text-lightAmber border-b-2 border-darkAmber border-opacity-0 hover:border-opacity-100 text-darkGray font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
              }
            >
              Workshops
            </NavLink>

            <div className="hidden lg:flex">
              <span className="border-l-2 border-lightGray">
                <BsWechat className="ml-5 text-darkAmber" size={35}></BsWechat>
              </span>
              <div className="w-auto lg:ml-[15px] gap-1 flex-col items-center">
                <p className="font-bold text-lightGray text-sm">Call Anytime</p>
                <p className="font-semibold text-sm text-lightGray">
                  +1-(100)-333-0055
                </p>
              </div>
            </div>
          </div>
        </nav>
      </Sticky>
    </div>
  );
};

export default NavBottom;
