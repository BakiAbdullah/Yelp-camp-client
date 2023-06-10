const MainHeading = ({ title, subtitle }) => {
  return (
    <div className="md:w-4/12 relative lg:w-4/12 mt-12 lg:mt-36 mb-14 lg:mb-32 mx-auto text-center">
      <p className="text-darkAmber font-archivo lg:text-xl font-semibold mb-2">
        - {title} -
      </p>
      <h3 className="lg:text-3xl text-2xl uppercase border-b-4 border-double border-lightAmber text-darkGray font-archivo mb-12 py-2">
        {subtitle}
      </h3>
      {/* <div className="w-[5px] h-[50px] absolute top-9 left-10 bg-darkAmber"></div> */}
    </div>
  );
};

export default MainHeading;
