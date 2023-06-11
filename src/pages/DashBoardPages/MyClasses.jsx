import { Helmet } from "react-helmet-async";
import { useClass } from "../../hooks/useClass";
import Button from "../../components/Button/Button";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";

const MyClasses = () => {
  const [classes, refetch] = useClass();
  console.log(classes);
  // How Does Reduce Works?
  const totalFees = classes.reduce((sum, item) => item.fees + sum, 0);

  const handleDelete = (item) => {
    fetch(`${import.meta.env.VITE_API_URL}/class/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();  
          toast.success("Your file has been deleted.");
        }
      });
    
  };
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
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 text-justify ms-14 whitespace-no-wrap">
                        {singleClass.available_seats}
                      </p>
                    </td>
                    <td className="py-10  flex justify-center items-center text-sm">
                      <RiDeleteBin6Fill
                      onClick={()=> handleDelete(singleClass)}
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
