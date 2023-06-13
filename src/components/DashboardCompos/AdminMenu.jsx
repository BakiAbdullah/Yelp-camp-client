import { NavLink } from "react-router-dom";
import { MdAdminPanelSettings, MdBookmarkAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
const AdminMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdAdminPanelSettings className="w-6 h-6 text-darkGray" />

        <span className="mx-4 font-medium">Admin Home</span>
      </NavLink>
      <NavLink
        to="/dashboard/manageusers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <FaUsers className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium">Manage Users</span>
      </NavLink>
      <NavLink
        to="/dashboard/manageclasses"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdBookmarkAdd className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium"> Manage Classes</span>
      </NavLink>
    </>
  );
};

export default AdminMenu;
