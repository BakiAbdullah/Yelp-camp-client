import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import Banner from "./Banner/Banner";
import HeroSection from "./HeroSection/HeroSection";
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
      <HeroSection></HeroSection>
      <WrapperContainer></WrapperContainer>
    </div>
  );
};

export default Home;