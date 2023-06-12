import { Fade } from "react-awesome-reveal";

const PopularClassCard = ({ singleClass }) => {
  const { image, class_name, class_details, instructor_name, students_count } =
    singleClass;
  return (
    <div>
      <div className="mx-auto px-4 max-w-xl">
        <div className="bg-white shadow-2xl mb-8 rounded-bl-3xl tracking-wide cursor-pointer">
          <Fade cascade damping={0.5} duration={2000}>
            <div className="overflow-hidden bg-pink ">
              <img
                src={image}
                alt="mountains"
                className="w-full h-full object-cover hover:scale-110 transition duration-500   rounded-bl-full"
              />
            </div>
          </Fade>
          <div className="px-4 py-2 mt-2">
            <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
              {class_name}
            </h2>
            <p className="text-sm text-darkGray my-2">
              {class_details.slice(0, 50)}...
            </p>
            <p className="text-sm font-semibold text-darkGray my-3">
              Students:<span className="text-darkAmber"> {students_count}</span>
            </p>
            <div className="flex items-center justify-between mt-2 mx-6">
              <a href="#" className="text-darkAmber text-xs -ml-6 ">
                Show More
              </a>
              <a href="#" className="flex text-gray-700">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-darkAmber"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                5
              </a>
            </div>
            <div className="author flex items-center -ml-3 my-3">
              <div className="user-logo">
                <img
                  className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                />
              </div>
              <h2 className="text-sm tracking-tighter text-gray-900">
                <a href="#">By {instructor_name} </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
