import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import CoverParallax from "../../components/Shared/CoverParallax/CoverParallax";
import classImg from "/baner13.jpg";

const AllClasses = () => {
  
  return (
    <div>
      <CoverParallax img={classImg} title={"All Classes"}></CoverParallax>
      <WrapperContainer>
        Cards will render here
      </WrapperContainer>
    </div>
  );
};

export default AllClasses;