import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Button from "../../../components/Button/Button";
import { FaUser, FaUserShield, FaUserTie } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      console.log(users);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users?email=${users?.email}`
      );
      return res.json();
    },
  });

  // Make Admin API
  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Now!`);
        }
      });
  };

  // Make Instructors API
  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Instructor Now!`);
        }
      });
  };

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
                            className="object-cover w-14 h-14  overflow-hidden mx-2 rounded-full"
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
                          <span className="flex items-center gap-2">
                            <FaUserShield
                              className="text-darkGray"
                              size={25}
                            ></FaUserShield>
                            <span className="text-darkGray font-bold">
                              Admin
                            </span>
                          </span>
                        ) : user.role === "instructor" ? (
                          <span className="flex items-center gap-2">
                            <FaUserTie
                              className="text-darkGray"
                              size={22}
                            ></FaUserTie>
                            <span className="text-darkGray font-bold">
                              Instructor
                            </span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <FaUser
                              className="text-darkGray"
                              size={22}
                            ></FaUser>
                            <span className="text-darkGray font-bold">
                              Student
                            </span>
                          </span>
                        )}
                      </p>
                    </td>
                    <td className="py-10 flex justify-center gap-4 items-center text-sm">
                      <Button
                        onClickHandler={() =>
                          user && handleMakeInstructor(user)
                        }
                        disabled={user.role === "instructor" && true}
                        label={"Make Instructor"}
                        hover={true}
                        fontSmall={true}
                      ></Button>
                      <Button
                        onClickHandler={() => user && handleMakeAdmin(user)}
                        disabled={user.role === "admin" && true}
                        label={"Make Admin"}
                        hover={true}
                        fontSmall={true}
                      ></Button>
                      {/* <button
                        className="cursor-pointer shadow-sm bg-darkAmber text-white duration-300 rounded-full font-bold text-xs lg:text-base px-6 py-2"
                        onClick={() => user && handleMakeAdmin(user)}
                      >
                        Make Admin
                      </button> */}
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
