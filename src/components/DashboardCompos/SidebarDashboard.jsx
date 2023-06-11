import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Shared/Navbar/Logo";
import { AiOutlineBars } from "react-icons/ai";
// import { BsFillHouseAddFill } from "react-icons/bs";
// import GuestMenu from "./GuestMenu";
import { useAuth } from "../../hooks/useAuth";
import StudentMenu from "./StudentMenu";
import HostMenu from "./HostMenu";
import { MdAddHome } from "react-icons/md";
// import HostMenu from "./HostMenu";

const SidebarDashboard = () => {
  // const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { user } = useAuth();

  const [isActive, setActive] = useState("false");
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const UserRole = "admin";

  return (
    <>
      {/* Small Screen Navbar */}
      <div className=" text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[url('/public/blob.svg')] bg-center bg-cover w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <Logo />
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-20 h-20 border-4 overflow-hidden border-lightGray mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {UserRole && UserRole === "admin" ? (
                <>
                  <label
                    htmlFor="Toggle3"
                    className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
                  >
                    <input
                      onChange={toggleHandler}
                      id="Toggle3"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <span className="px-4 py-1 font-semibold text-darkGray rounded-l-md bg-darkAmber peer-checked:bg-creamYellow">
                      Guest
                    </span>
                    <span className="px-4 py-1 font-semibold text-darkGray rounded-r-md bg-creamYellow peer-checked:bg-darkAmber">
                      Host
                    </span>
                  </label>
                  {/* Menu Links */}
                  {toggle ? <HostMenu></HostMenu> : <StudentMenu></StudentMenu>}
                </>
              ) : (
                <StudentMenu></StudentMenu>
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <MdAddHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SidebarDashboard;
