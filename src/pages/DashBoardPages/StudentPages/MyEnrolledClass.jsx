import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import SubHeading from "../../../components/MainHeading/SubHeading";
import { useState } from "react";


const MyEnrolledClass = () => {
  const {user} = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  console.log(enrolledClasses)

  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_API_URL}/selectedClass/${user?.email}`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClasses(data);
      });
  }, [user?.email]);

  return (
    <div>
      <div className="flex justify-around items-center my-10">
        <SubHeading title={"My Enrolled Classes"}></SubHeading>
      </div>
      <div className="-mx-4 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                #
              </th>
              <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                Image
              </th>
              <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                Instructor Name
              </th>
              <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                Class Name
              </th>
              <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                Fees
              </th>
              <th className="px-24 py-3  border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                TransactionId
              </th>
              <th className="px-5 py-3 border-b border-gray text-center font-semibold text-darkGray tracking-wider">
                Payment Status
              </th>
            </thead>
            <tbody>
              {enrolledClasses.map((enrollClass, index) => (
                <tr key={enrollClass._id}>
                  <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                    <div className="flex items-center">
                      <div className="">
                        <img
                          className="w-[90px] h-[70px] object-cover "
                          src={enrollClass.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {enrollClass.instructor_name}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {enrollClass.class_name}
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                    ${enrollClass.fees}
                  </td>
                  <td className="px-5 py-5  bg-white text-sm">
                    <p className="text-gray-900 text-center whitespace-no-wrap">
                      {enrollClass.transactionId}
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 text-center font-semibold whitespace-no-wrap">
                      {enrollClass.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClass;