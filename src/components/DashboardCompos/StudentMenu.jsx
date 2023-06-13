import { NavLink } from "react-router-dom";
import {
  MdLibraryBooks,
  MdLibraryAddCheck,
  MdAccountBalanceWallet,
} from "react-icons/md";
import {  FaBuilding } from "react-icons/fa";
// import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
// import { useAuth } from "../../hooks/useAuth";
// import { becomeHost } from "../../api/auth";
// import { toast } from "react-hot-toast";
// import HostRequestModal from "../Modal/HostRequestModal";

const StudentMenu = () => {
  // const navigate = useNavigate();
  const {  role } = useAuth();
  // const [modal, setModal] = useState(false);

  // const modalHandler = (email) => {
  //   becomeHost(email).then((data) => {
  //     console.log(data);
  //     toast.success("You are host now, Post Rooms!");
  //     setRole("host");
  //     navigate('/dashboard/add-room')
  //     closeModal();
  //   });
  //   console.log("Modal Continue Button clicked!");
  // };

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

        <span className="mx-4 font-medium">Users Home</span>
      </NavLink>
      <NavLink
        to="/dashboard/myclasses"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-creamYellow  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdLibraryBooks className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium">My Selected Classes</span>
      </NavLink>
      <NavLink
        to="/dashboard/paymenthistory"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdAccountBalanceWallet className="w-5 h-5 text-darkGray" />

        <span className="mx-4 font-medium">Payment History</span>
      </NavLink>

      {!role && (
        <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
          <MdLibraryAddCheck className="w-5 h-5 text-darkGray" />

          <span className="mx-4 font-medium">My Enrolled Class</span>
        </div>
      )}
      {/* <HostRequestModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      ></HostRequestModal> */}
    </>
  );
};

export default StudentMenu;
