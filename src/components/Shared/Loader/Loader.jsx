import { BarLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <BarLoader size={100} color="red" />
    </div>
  );
};

export default Loader;
