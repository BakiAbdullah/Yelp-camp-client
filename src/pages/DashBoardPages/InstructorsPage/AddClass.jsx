import { toast } from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SubHeading from "../../../components/MainHeading/SubHeading";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const categories = ["Wood Arts", "Glass Studio", "Clay Studio", "Art Education"];
  const navigate = useNavigate();

  const { user } = useAuth();
  const instructor_name = user.displayName;

  const handleSubmit = (e) => {
    e.preventDefault();
    const class_name = e.target[2].value;
    const image = e.target[3].value;
    const category = e.target[4].value;
    const fees = parseFloat(e.target[5].value);
    const available_seats = parseInt(e.target[6].value);
    const class_details = e.target[7].value;
    const students = [];
    const enrolledCount = students.length;

    const newClass = {
      class_name,
      category,
      instructor_name,
      available_seats,
      image,
      fees,
      class_details,
      status: "pending",
      instructor_email: user.email,
      enrolledCount,
      students,
    };

   
    console.log(newClass);

    // Posted classes for Instructors
    fetch(`${import.meta.env.VITE_API_URL}/pendingClasses`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // refetch();
        if (data.insertedId) {
          toast.success("Class Submitted successfully!");
          navigate('/dashboard/myclass')
        } else {
          toast.error("You Have Already Submitted This Class");
        }
      });
  };

  return (
    <div className="w-full flex flex-col min-h-screen text-darkGray justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <Helmet>
        <title>Yelp Camp | Add Class</title>
      </Helmet>
      {/* <div className="flex justify-around items-center my-10">
        <p className="font-bold font-archivo text-darkGray text-2xl">
          Add a Class
        </p>
      </div> */}
      <SubHeading title={"Add Your Class"}></SubHeading>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="instructor_name" className="block text-gray-600">
                Instructor Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md "
                name="instructor_name"
                id="instructor_name"
                type="text"
                value={instructor_name}
                readOnly
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="instructor_email" className="block text-gray-600">
                Instructor Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md "
                name="instructor_email"
                id="instructor_email"
                type="text"
                value={user.email}
                readOnly
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="class_name" className="block text-gray-600">
                Class Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md "
                name="class_name"
                id="class_name"
                type="text"
                placeholder="Class Title"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="image" className="block text-gray-600">
                Class Image
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md "
                name="image"
                id="image"
                type="url"
                placeholder="Class Image URL"
                required
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-orange-200 focus:outline-orange-400 rounded-md"
                name="category"
              >
                {categories.map((category, index) => (
                  <option value={category} key={index}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="fees" className="block text-gray-600">
                  fees
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md "
                  name="fees"
                  id="fees"
                  type="number"
                  placeholder="$ fees"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="available_seats"
                  className="block text-gray-600"
                >
                  Available Seats
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md "
                  name="available_seats"
                  id="available_seats"
                  type="number"
                  placeholder="Available Seats"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="class_details" className="block text-gray-600">
                Class Details
              </label>

              <textarea
                id="class_details"
                className="block rounded-md resize-none focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-orange-200 focus:outline-darkAmber "
                name="class_details"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-fit mt-10 py-4 btn btn-outline btn-sm rounded-md  bg-orange-200 hover:bg-darkAmber hover:text-white font-bold text-darkGray "
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
