import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import './Banner.css'
import Button from "../../../components/Button/Button";
import { Slide } from "react-awesome-reveal";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <>
      <div className="">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={4000}
        >
          <div
            className="relative"
            data-src="/public/baner13.jpg"
          >
            <div className="w-2/3 mx-auto text-center">
              <Slide direction="left" cascade damping={0.3} duration={1000}>
                <h2 className="lg:text-7xl md:text-6xl text-2xl font-archivo text-white">
                  Unlock Your Artistic Potential with Expert Instructors
                </h2>
              </Slide>
              <Slide direction="right" cascade damping={0.3} duration={1000}>
                <p className="lg:text-3xl text-xs my-5 font-archivo text-white">
                  Experience the Joy of Art & Craft!
                </p>
              </Slide>
              <Slide direction="right" cascade damping={0.3} duration={1000}>
                <Button
                  label="Enroll Now"
                  hover={true}
                  fontbig={false}
                ></Button>
              </Slide>
            </div>
          </div>
          <div
            className="relative"
            data-src="../../../../public/ART_Studio.jpg"
          >
            <div className="w-2/3 mx-auto text-center">
              <Slide cascade damping={0.3} duration={1200} direction="left">
                <h2 className="lg:text-7xl md:text-6xl text-2xl font-archivo text-white">
                  Enroll Now for a Summer of Art & Craft Fun!
                </h2>
              </Slide>

              <Slide cascade damping={0.3} duration={1200} direction="right">
                <p className="lg:text-3xl text-xs my-5 font-archivo text-white">
                  Where Imagination Takes Flight!
                </p>
              </Slide>

              <Button label="Enroll Now" hover={true} fontbig={false}></Button>
            </div>
          </div>
          <div className="relative" data-src="../../../../public/potery3.jpg">
            <div className="w-2/3 mx-auto text-center">
              <Slide cascade damping={0.3} duration={1200} direction="left">
                {" "}
                <h2 className="lg:text-7xl md:text-6xl text-2xl font-archivo text-white">
                  Join Us for an Exciting Journey of Art & Craft
                </h2>
              </Slide>

              <Slide cascade damping={0.3} duration={1000} direction="right">
                <p className="lg:text-3xl text-xs my-5 font-archivo text-white">
                  Where Imagination Takes Flight!
                </p>
              </Slide>

              <Button label="Enroll Now" hover={true} fontbig={false}></Button>
            </div>
          </div>
        </AutoplaySlider>
      </div>
    </>
  );
};

export default Banner;
