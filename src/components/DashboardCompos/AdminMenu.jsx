import { NavLink } from "react-router-dom";
import { MdAddBox, MdAdminPanelSettings, MdBookmarkAdd, MdSupervisedUserCircle } from "react-icons/md";
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
        <MdAdminPanelSettings className="w-5 h-5" />

        <span className="mx-4 font-medium">Admin Home</span>
      </NavLink>
      <NavLink
        to="/dashboard/addclass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdAddBox className="w-5 h-5" />

        <span className="mx-4 font-medium">Add Class</span>
      </NavLink>
      <NavLink
        to="/dashboard/manageusers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdSupervisedUserCircle className="w-5 h-5" />

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
        <MdBookmarkAdd className="w-5 h-5" />

        <span className="mx-4 font-medium"> Manage Classes</span>
      </NavLink>
    </>
  );
};

export default AdminMenu;
