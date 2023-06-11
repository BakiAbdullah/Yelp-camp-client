import { Helmet } from "react-helmet-async";
import { useClass } from "../../hooks/useClass";
import Button from "../../components/Button/Button";
import { RiDeleteBin6Fill } from "react-icons/ri";
import CoverParallax from "../../components/Shared/CoverParallax/CoverParallax";
import MainHeading from "../../components/MainHeading/MainHeading";

const MyClasses = () => {
  const [classes, refetch] = useClass();
  console.log(classes);
  // How Does Reduce Works?
  const totalFees = classes.reduce((sum, item) => item.fees + sum, 0);
  return (
    <>
      <Helmet>
        <title>Yelp Camp | My Classes</title>
      </Helmet>
      <div>
        <div className="flex justify-around items-center my-10">
          <p className="font-semibold text-darkGray text-lg">Total classes : {classes.length}</p>
          <p className="font-semibold text-darkGray text-lg">Total Fees : ${totalFees}</p>
          <Button label={"Purchase"} fontSmall={true}></Button>
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
                <th className="px-5 py-3 border-b border-gray text-left font-semibold text-darkGray tracking-wider">
                  Available Seats
                </th>
                <th className="px-5 py-3 border-b border-gray text-center font-semibold text-darkGray tracking-wider">
                  Action
                </th>
              </thead>
              <tbody>
                {classes.map((singleClass, index) => (
                  <tr key={singleClass._id}>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            className="w-[90px] h-[70px] object-cover "
                            src={singleClass.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {singleClass.instructor_name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {singleClass.class_name}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                      ${singleClass.fees}
                      {/* <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">4</span>
                      </span> */}
                    </td>
                    <td className="px-5 py-5 border-b border-gray text-left bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {singleClass.available_seats}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray bg-white text-center space-x-4 text-sm">
                      <RiDeleteBin6Fill
                        size={25}
                        className="text-red-600 cursor-pointer hover:text-red-700 duration-200 "
                      ></RiDeleteBin6Fill>
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

export default MyClasses;
