

const PopularInstructorsCard = ({ singleInstructor }) => {
  const {
    instructor_img,
    instructor_name,
    brief_description,
    number_of_classes_taken,
    students,
  } = singleInstructor;
  return (
    <>
      <div className="">
        <div className="max-w-3xl flex justify-center items-center h-full m-4">
          <div className="relative bg-chocolate group md:w-5/12 w-3/4 h-[300px] transition-all duration-300">
            <div className="flex flex-col">
              <h1 className="pl-4 md:pl-8 mt-6 md:mt-8 text-xl md:text-2xl font-archivo text-pink transform group-hover:translate-x-6 duration-300 uppercase leading-snug">
                <span>
                  {instructor_name}: <br />
                </span>
                <span className="text-sm font-sans">
                  Class Taken: {number_of_classes_taken}
                </span>
                <span className="text-sm font-sans">
                  <br /> students: {students}
                </span>
              </h1>
              <p className="absolute hidden md:block bottom-1 p-4 md:pl-8 text-pink text-xs">
                {brief_description.slice(0, 100)}...
              </p>
            </div>
            <div className="absolute z-50 bottom-32 hidden md:bottom-10 right-0 transform translate-x-8 -translate-y-20 md:flex items-center justify-center w-16 h-16 rounded-full bg-chocolate group-hover:bg-darkAmber text-pink group-hover:text-white font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none">
              Get It!
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <img src={instructor_img} className="h-[300px] object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularInstructorsCard;