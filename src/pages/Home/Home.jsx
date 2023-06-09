import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import RegisterOrientation from "./RegisterOrientation/RegisterOrientation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RegisterOrientation></RegisterOrientation>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <WrapperContainer></WrapperContainer>
    </div>
  );
};

export default Home;