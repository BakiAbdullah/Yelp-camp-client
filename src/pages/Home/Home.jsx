import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import RegisterOrientation from "./RegisterOrientation/RegisterOrientation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RegisterOrientation></RegisterOrientation>
      <PopularClasses></PopularClasses>
      <WrapperContainer></WrapperContainer>
    </div>
  );
};

export default Home;