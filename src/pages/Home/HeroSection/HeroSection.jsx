import { Typewriter } from "react-simple-typewriter";
import Button from "../../../components/Button/Button";
import banner from "/baner11.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse mt-32 pb-24 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={banner}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block italic font-serif py-px mb-4 text-lightAmber   ">
              Welcome
            </p>
            <h2 className="mb-5 font-archivo text-darkGray text-3xl font-bold tracking-tight text-gray-900 md:text-5xl sm:leading-none">
              <Typewriter
                words={[
                  "Resurrecting time Codtestede skills.",
                  "A unique facet of the School of Art & Craft",
                ]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
              ></Typewriter>
            </h2>
            <div className="flex items-center gap-4  py-5">
              <RiDoubleQuotesL
                className="italic tranform rotate-3 text-lightAmber"
                size={55}
              ></RiDoubleQuotesL>
              <span className="italic text-darkGray font-serif w-2/4">
                Traditionally Passed From One Generation to The Next.
              </span>
            </div>
            <p className="pr-5 mb-5 text-lightGray text-gray-700 md:text-lg">
              Yelp Camp is a well resourced and highly professional school,
              established in 2008 in response to the rarity of rigorous,
              representational art education.
            </p>
            <div className="flex items-center mt-4 gap-5">
              <Button label={"More About Us"} hover={true}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
