import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Shared/Navbar/Logo";
import { AiOutlineBars } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";

import { useAuth } from "../../hooks/useAuth";
import StudentMenu from "./StudentMenu";
import AdminMenu from "./AdminMenu";
import { MdHomeWork } from "react-icons/md";
import InstructorMenu from "./InstructorMenu";

const SidebarDashboard = () => {
  const [isActive, setActive] = useState("false");
  const { user, userRole } = useAuth();
  console.log('User Role is ',userRole)

  // Dashboard Sidebar Toggler
  const handleToggle = () => {
    setActive(!isActive);
  };

  //TODO: Load data from server by Roles (Making fake AdminRoles)
  // const isAdmin = true;
  // const isInstructor = false;

  return (
    <>
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

      <div
        className={`z-10 md:fixed flex flex-col overflow-x-hidden bg-[url('/public/overlay.svg')] bg-cover w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <Logo />
            </div>
            <div className="flex flex-col items-center mt-14 lg:mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-20 h-20  overflow-hidden mx-2 rounded-full"
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
              {userRole === 'admin' ? (
                <>
                  <AdminMenu></AdminMenu>
                </>
              ) : userRole === 'instructor' ? (
                <InstructorMenu></InstructorMenu>
              ) : (
                <StudentMenu></StudentMenu>
              )}
            </nav>
          </div>
        </div>

        <div>
          {/* Common dashboad part for all Roles */}
          <hr className="text-chocolate" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <MdHomeWork className="w-5 h-5" />

            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <NavLink
            to="/allClasses"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <SiGoogleclassroom className="w-5 h-5" />

            <span className="mx-4 font-medium">Classes</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SidebarDashboard;
