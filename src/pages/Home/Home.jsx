import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import Banner from "./Banner/Banner";
import RegisterOrientation from "./RegisterOrientation/RegisterOrientation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RegisterOrientation></RegisterOrientation>
      <WrapperContainer></WrapperContainer>
    </div>
  );
};

export default Home;