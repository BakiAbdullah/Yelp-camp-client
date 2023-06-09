import { useState } from "react";
import MainHeading from "../../../components/MainHeading/MainHeading";
import { useEffect } from "react";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
import PopularClassCard from "./PopularClassCard";
import Loader from "../../../components/Shared/Loader/Loader";


const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/allclasses?limit=6`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
        setLoading(false);
      });
  }, []);

  if(loading) {
    return <Loader></Loader>
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
