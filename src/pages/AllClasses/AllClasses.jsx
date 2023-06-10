import { useQuery } from "@tanstack/react-query";
import MainHeading from "../../components/MainHeading/MainHeading";
import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import CoverParallax from "../../components/Shared/CoverParallax/CoverParallax";
import Loader from "../../components/Shared/Loader/Loader";
// import PopularClassCard from "../Home/PopularClasses/PopularClassCard";
import classImg from "/baner12.jpg";
import AllClassCard from "./AllClassCard";

const AllClasses = () => {
  // Tanstack Query Implementation
  const { data: classes = [], isLoading: loading } = useQuery({
    queryKey: ["allclasses"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/allclasses`
      );
      return res.json();
    },
  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <CoverParallax img={classImg} title={"All Classes"}></CoverParallax>
      <MainHeading
        title={"All Classes"}
        subtitle={"Available classes"}
      ></MainHeading>
      <WrapperContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {classes.map((singleClass) => (
            <AllClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></AllClassCard>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
};

export default AllClasses;