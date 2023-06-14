import { Fade } from "react-awesome-reveal";
import Button from "../../components/Button/Button";
// import Loader from "../../components/Shared/Loader/Loader";
// import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useClass } from "../../hooks/useClass";

const AllClassCard = ({ singleClass }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const[refetch] = useClass();

  const { user, userRole } = useAuth();
  const {
    _id,
    image,
    class_name,
    class_details,
    instructor_name,
    instructor_email,

    available_seats,
    fees,
  } = singleClass;
  // console.log(singleClass)

  // Add Item to Cart
  const handleAddClass = (singleClass) => {
    console.log(singleClass);
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        image,
        fees,
        available_seats,
        class_name,
        instructor_name,
        instructor_email,

        email: user?.email,
        status: 'unpaid'
      };
      fetch(`${import.meta.env.VITE_API_URL}/selectedClass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Classes added successfully");
            
          }
        });
    } else {
      toast.error("Please Login to Add Class");
      navigate("/login", { state: { from: location } });
    }
  };

  // // Tanstack Query Implementation
  // const { data: selectedClass = [], isLoading: loading } = useQuery({
  //   queryKey: ["allclasses"],
  //   // enabled: !loading,
  //   queryFn: async () => {
  //     const res = await fetch(`${import.meta.env.VITE_API_URL}/selectedClass`);
  //     return res.json();
  //   },
  // });

  // if (loading) {
  //   return <Loader></Loader>;
  // }

  return (
    <div>
      <div className="mx-auto px-4 max-w-xl">
        <div
          className={`${
            available_seats === 0 ? "bg-red-500 text-white" : ""
          } shadow-2xl mb-8 rounded-bl-3xl tracking-wide cursor-pointer`}
        >
          <Fade cascade damping={0.5} duration={2000}>
            <div className="overflow-hidden bg-pink ">
              <img
                src={image}
                alt="mountains"
                className="w-full lg:h-[300px] object-cover hover:scale-110 transition duration-500 rounded-bl-full"
              />
            </div>
          </Fade>
          <div className="px-4 py-2 mt-2">
            <h2 className="font-bold text-2xl text-darkGray tracking-normal">
              {class_name}
            </h2>
            <p className="text-sm text-gray-700 my-2">
              {class_details.slice(0, 50)}...
            </p>
            <div className="flex items-center justify-between my-4 ">
              <p className="font-semibold text-darkGray">
                Available Seats: {available_seats}
              </p>
              <div onClick={() => handleAddClass(singleClass)}>
                <Button
                  disabled={available_seats === 0 || userRole === 'admin' || userRole === 'instructor'}
                  label={"Select"}
                  hover={true}
                ></Button>
              </div>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center justify-center">
                <div className="user-logo">
                  <img
                    className="w-12 h-12 object-cover rounded-full me-3  shadow"
                    src="/placeholder.jpg"
                    alt="avatar"
                  />
                </div>
                <p className="text-sm tracking-tighter text-gray-900">
                  <a href="#">By {instructor_name} </a>
                </p>
              </div>

              <p className="font-semibold text-darkAmber">Price: ${fees}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;
