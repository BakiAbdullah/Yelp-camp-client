import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import './Banner.css'
import Button from "../../../components/Button/Button";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <>
      <div className="min-h-screen">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={4000}
        >
          <div
            className="relative"
            data-src="../../../../public/instructor.webp"
          >
            <div className="w-2/3 mx-auto text-center">
              <h2 className="lg:text-7xl md:text-6xl text-3xl font-archivo text-white">
                Unlock Your Artistic Potential with Expert Instructors
              </h2>
              <p className="lg:text-3xl my-5 font-archivo text-white">
                Experience the Joy of Art & Craft!
              </p>

              <Button label="Enroll Now" hover={true} fontbig={true}></Button>
            </div>
          </div>
          <div
            className="relative"
            data-src="../../../../public/ART_Studio.jpg"
          >
            <div className="w-2/3 mx-auto text-center">
              <h2 className="lg:text-7xl md:text-6xl text-3xl font-archivo text-white">
                Enroll Now for a Summer of Art & Craft Fun!
              </h2>
              <p className="lg:text-3xl my-5 font-archivo text-white">
                Where Imagination Takes Flight!
              </p>

              <Button label="Enroll Now" hover={true} fontbig={true}></Button>
            </div>
          </div>
          <div className="relative" data-src="../../../../public/potery3.jpg">
            <div className="w-2/3 mx-auto text-center">
              <h2 className="lg:text-7xl md:text-6xl text-3xl font-archivo text-white">
                Join Us for an Exciting Journey of Art & Craft
              </h2>
              <p className="lg:text-3xl my-5 font-archivo text-white">
                Where Imagination Takes Flight!
              </p>

              <Button label="Enroll Now" hover={true} fontbig={true}></Button>
            </div>
          </div>
        </AutoplaySlider>
      </div>
    </>
  );
};

export default Banner;
