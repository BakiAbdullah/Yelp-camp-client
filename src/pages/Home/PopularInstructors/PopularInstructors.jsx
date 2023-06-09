import { useEffect, useState } from "react";
import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
import Loader from "../../../components/Shared/Loader/Loader";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructors = () => {
   const [instructors, setInstructors] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
     setLoading(true);
     fetch(`${import.meta.env.VITE_API_URL}/instructors?limit=6`)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setInstructors(data);
         setLoading(false);
       });
   }, []);

   if (loading) {
     return <Loader></Loader>;
   }
  return (
    <div>
      <MainHeading
        title={"Meet Our Instructors"}
        subtitle={"Featured instructors"}
      ></MainHeading>
      <WrapperContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
          {instructors.map((singleInstructor) => (
            <PopularInstructorsCard
              key={singleInstructor._id}
              singleInstructor={singleInstructor}
            ></PopularInstructorsCard>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
};

export default PopularInstructors;