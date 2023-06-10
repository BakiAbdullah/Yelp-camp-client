
import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
import PopularClassCard from "./PopularClassCard";
import Loader from "../../../components/Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
  
  // Tanstack Query Implementation
  const { data: classes = [], isLoading: loading } = useQuery({
    queryKey: ["allclasses"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/allclasses?limit=6`
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
        title={"Popular Classes"}
        subtitle={"instructors top classes"}
      ></MainHeading>
      <WrapperContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {classes.map((singleClass) => (
            <PopularClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></PopularClassCard>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
};

export default PopularClasses;
