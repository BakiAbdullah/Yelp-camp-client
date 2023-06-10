
import { Parallax } from 'react-parallax';

const CoverParallax = ({img, title}) => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the Menu"
        strength={-220}
      >
        <div className="hero h-[300px] mb-32">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg mx-auto transform translate-y-48">
              <h1 className="mb-5 text-5xl font-bold font-archivo uppercase text-darkAmber">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default CoverParallax;