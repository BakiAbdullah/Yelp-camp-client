import { NavLink } from "react-router-dom";

import { FaAddressBook, FaBuilding, FaUsersCog } from "react-icons/fa";

const InstructorMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/home"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <FaBuilding className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium">Instructors Home</span>
      </NavLink>
      <NavLink
        to="/dashboard/addclass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <FaAddressBook className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium">Add Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/myclass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <FaUsersCog className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium"> My Classes</span>
      </NavLink>
    </>
  );
};

export default InstructorMenu;
