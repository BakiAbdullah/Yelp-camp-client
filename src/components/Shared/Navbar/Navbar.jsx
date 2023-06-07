import { useAuth } from "../../../hooks/useAuth";
import Avatar from "./Avatar";
import NavBottom from "./NavBottom";
import { FaCampground } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  const {user} = useAuth();
  return (
    <div>
      <header className="bg-white border-t-8 border-darkAmber">
        <div className="container  mx-auto px-4 py-8 flex items-center lg:justify-around justify-between">
          <div className="mr-[20px] flex items-center justify-center gap-2">
            <FaCampground size={48} className="text-darkAmber"></FaCampground>
            <span className="font-extrabold text-3xl">Yelp Camp</span>
          </div>

          <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-slate-50 rounded-md hidden xl:flex items-center justify-center">
            <div className="relative parent">
              <a
                href="#"
                className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
              >
                <span className="uppercase text-darkGray font-bold text-sm mr-4">
                  Our Courses
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current pt-1 text-darkAmber "
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </a>
              <ul className="child transition duration-700 md:absolute top-full right-0 md:w-48 bg-darkAmber text-white font-semibold md:shadow-lg md:rounded-b ">
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-lightAmber duration-500"
                  >
                    Web development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-lightAmber duration-500"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-lightAmber duration-500"
                  >
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-lightAmber duration-500"
                  >
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-lightAmber duration-500"
                  >
                    Machine Learning
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex hidden items-center space-x-2 bg-white shadow-sm py-1 px-2 rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-lightGray cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                className="outline-none caret-darkAmber"
                type="text"
                placeholder="I'm Searching for.."
              />
            </div>
          </div>

          <nav className="flex space-x-5">
            {user ? (
              <>
                <ul className="ml-auto xl:w-48 flex items-center justify-end">
                  <Avatar></Avatar>
                  <div className="ml-4 flex flex-col font-bold">
                    <span className="text-xs text-gray-400">User Name</span>
                    <span>Email</span>
                  </div>
                </ul>
                <button className="border border-gray shadow-sm  hover:shadow-inner rounded-full font-bold px-6 py-2">
                  Dashboard
                </button>
              </>
            ) : (
              <button className="hover:bg-white hover:text-darkGray shadow-sm ml-auto bg-darkAmber text-white duration-300 rounded-full font-bold px-6 py-2">
                Sign In
              </button>
            )}
          </nav>
        </div>

        <hr className="text-darkAmber bg-darkAmber h-[2px]" />
        <NavBottom></NavBottom>
      </header>
    </div>
  );
};

export default Navbar;
