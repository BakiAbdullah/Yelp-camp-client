
import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import SubHeading from "../../../components/MainHeading/SubHeading";
import Button from "../../../components/Button/Button";

const ManageClasses = () => {

  const { data: pendingClasses = [], refetch } = useQuery(
    ["pendingClasses"],
    async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/dashboard/pendingClasses`
      );
      return response.json();
    }
  );
  // useEffect(() => {
  //     fetch('http://localhost:5000/dashboard/pendingclasses')
  //         .then(res => res.json())
  //         .then(data => {
  //             setPendingClasses(data);
  //         })
  // }, []);

  const handleApprove = (manageClass) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/dashboard/approvedClasses/${
        manageClass._id
      }`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("This class is approved");
        }
      });

    fetch(`${import.meta.env.VITE_API_URL}/allClasses/approved`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(manageClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.upsertedCount) {
          toast.success("Class Added");
        }
      });

  };

  // Deny A Class
  const handleDeny = (manageClass) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/dashboard/deniedClasses/${
        manageClass._id
      }`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.error("This class is Denied");
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-hidden flex flex-col justify-center min-h-screen">
        <SubHeading title={"Manage Classes"}></SubHeading>
        <div className="-mx-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full text-darkGray shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  #
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Image
                </th>

                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Instructor
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Instructor Email
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Class Name
                </th>

                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Available Seats
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Fee
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b border-gray text-center font-semibold text-darkGray tracking-wider">
                  Action
                </th>
              </thead>
              <tbody>
                {pendingClasses.map((pendingClass, index) => (
                  <tr key={pendingClass._id}>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            className="w-[50px] h-[50px] object-cover"
                            src={pendingClass.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {pendingClass.instructor_name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {pendingClass.instructor_email}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 text-justify  whitespace-no-wrap">
                        {pendingClass.class_name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 text-justify ms-14 whitespace-no-wrap">
                        {pendingClass.available_seats}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      ${pendingClass.fees}
                    </td>
                    <td className="px-5 py-5 border-b border-gray font-semibold text-darkGray text-sm">
                      <span className="bg-orange-100 p-1 rounded-full px-2 text-xs">
                        {" "}
                        {pendingClass.status}
                      </span>
                    </td>
                    <td className="py-10  flex border-b border-gray gap-1  justify-evenly items-center text-sm">
                      <Button
                        onClickHandler={() => handleApprove(pendingClass)}
                        disabled={pendingClass.status === "approved" || pendingClass.status === "denied"}
                        label={"Approve"}
                        fontSmall={true}
                        hover={true}
                      ></Button>
                      <Button
                        onClickHandler={() => handleDeny(pendingClass)}
                        disabled={ pendingClass.status === "approved" || pendingClass.status === "denied"}
                        label={"Deny"}
                        fontSmall={true}
                        hover={true}
                      ></Button>
                      <Button
                        onClickHandler={() => ""}
                        label={"feedback"}
                        fontSmall={true}
                        hover={false}
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

export default ManageClasses;