import Button from "../../components/Button/Button";

const InstructorsRow = ({instructor}) => {
  const {
    instructor_img,
    instructor_name,
    instructor_email,
    number_of_classes_taken,
  } = instructor;
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="">
              <img
                className="w-[90px] h-[70px] object-cover "
                src={instructor_img}
                alt=""
              />
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{instructor_name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{instructor_email}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {number_of_classes_taken}
          {/* <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">4</span>
                      </span> */}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <Button label={"See Classes"} hover={true}></Button>
        </td>
      </tr>
    </>
  );
};

export default InstructorsRow;