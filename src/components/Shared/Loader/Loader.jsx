import { RiseLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      className="
      h-[80vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <RiseLoader size={12} color="orange" />
    </div>
  );
};

export default Loader;
