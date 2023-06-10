
import { useQuery } from "@tanstack/react-query";
import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
import Loader from "../../../components/Shared/Loader/Loader";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructors = () => {
  // Tanstack Query Implementation
  const {
    data: instructors = [],
    isLoading: loading,

  } = useQuery({
    queryKey: ["instructors"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/instructors?limit=6`
      );
      return res.json();
    },
  });

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