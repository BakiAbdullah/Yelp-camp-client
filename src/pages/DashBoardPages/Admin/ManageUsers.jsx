import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Button from "../../../components/Button/Button";
// import {  RiDeleteBin6Fill } from "react-icons/ri";
import { FaUserShield, FaUserTie } from "react-icons/fa";
// import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users?email=${users?.email}`
      );
      return res.json();
    },
  });

  //TODO: Change user Roles
  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          // toast.success(`${user.name} is an Admin Now!`);
        }
      });
  };
  // const handleRole = (user) => {
  //   fetch(`${import.meta.env.VITE_API_URL}/class/${user._id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         refetch();
  //         toast.success("Your file has been deleted.");
  //       }
  //     });
  // };

  return (
    <div>
      <Helmet>
        <title>Yelp Camp | Manage Users</title>
      </Helmet>
      <div>
        <div className="flex justify-around items-center my-10">
          <p className="font-bold font-archivo text-darkGray text-2xl">
            Total Users :{" "}
            <span className="text-lightAmber">{users.length}</span>
          </p>
        </div>
        <div className="-mx-4 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  #
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  User Image
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  User Name
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  User Email
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  User Role
                </th>
                <th className="px-5 py-3 border-b border-gray text-center font-semibold text-darkGray tracking-wider">
                  Update Role
                </th>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            className="object-cover w-20 h-20  overflow-hidden mx-2 rounded-full"
                            src={user?.image}
                            alt="avatar"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.email}
                      </p>
                    </td>

                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900  whitespace-no-wrap">
                        {user?.role === "admin" ? (
                          <FaUserShield size={22}></FaUserShield>
                        ) : user.role === "instructor" ? (
                          <FaUserTie size={22}></FaUserTie>
                        ) : (
                          <p>Student</p>
                        )}
                      </p>
                    </td>
                    <td className="py-10 flex justify-center gap-4 items-center text-sm">
                      <Button
                        onClick={() => handleMakeAdmin(user._id)}
                        label={"Make Admin"}
                        hover={true}
                        fontSmall={true}
                      ></Button>
                      <Button
                        label={"Make  Instructor"}
                        hover={true}
                        fontSmall={true}
                      ></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
