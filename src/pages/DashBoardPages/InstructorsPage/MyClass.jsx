import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../../components/Button/Button";
import SubHeading from "../../../components/MainHeading/SubHeading";

const MyClass = () => {
  const [pendingClasses, setPendingClasses] = useState([]);
  const { user } = useAuth();
  // const currentUser = userData.find((k) => user?.email === k.email);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/pendingClasses/${user?.email}`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPendingClasses(data);
      });
  }, [user?.email]);

  console.log(pendingClasses);
  // const handleFeedback = () => {
  //     console.log(hello);
  // }

  return (
    <>
      <div className="overflow-x-hidden  flex flex-col justify-center min-h-screen">
        <SubHeading title={"My All Class"}></SubHeading>
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
                  Class Name
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Fees
                </th>

                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Available Seats
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Enrolled Student
                </th>
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b border-gray text-center font-semibold text-darkGray tracking-wider">
                  Action
                </th>
              </thead>
              <tbody>
                {pendingClasses.map((singleClass, index) => (
                  <tr key={singleClass._id}>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            className="w-[50px] h-[50px] object-cover"
                            src={singleClass.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {singleClass.class_name}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      ${singleClass.fees}
                    </td>

                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 text-justify ms-14 whitespace-no-wrap">
                        {singleClass.available_seats}
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 text-justify ms-14 whitespace-no-wrap">
                        {singleClass.enrolledCount}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray font-semibold text-darkGray text-sm">
                      <span className="bg-orange-100 p-1 rounded-full px-2 text-xs">
                        {" "}
                        {singleClass.status}
                      </span>
                    </td>
                    <td className="py-10 flex  justify-evenly items-center text-sm">
                      {singleClass.status === "denied" ? (
                        <Button
                          label={"Feedback"}
                          fontSmall={true}
                          hover={true}
                        ></Button>
                      ) : (
                        <Button
                          label={"Update"}
                          fontSmall={true}
                          hover={true}
                        ></Button>
                      )}
                      {/* <RiDeleteBin6Fill
                        onClick={() => handleDelete(singleClass)}
                        size={25}
                        className="text-red-600 cursor-pointer hover:text-red-700 duration-200 "
                      ></RiDeleteBin6Fill> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClass;
