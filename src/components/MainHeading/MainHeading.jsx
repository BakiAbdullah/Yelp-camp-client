const MainHeading = ({ title, subtitle }) => {
  return (
    <div className="md:w-4/12 relative lg:w-6/12 mt-24 mb-16 mx-auto text-center">
      <p className="text-darkAmber font-archivo text-xl font-semibold mb-2">
        - {title} -
      </p>
      <h3 className="text-3xl uppercase text-darkGray font-archivo mb-12 py-2">
        {subtitle}
      </h3>
      <div className="w-[5px] h-[50px] absolute top-9 left-10 bg-darkAmber"></div>
    </div>
  );
};

export default MainHeading;
