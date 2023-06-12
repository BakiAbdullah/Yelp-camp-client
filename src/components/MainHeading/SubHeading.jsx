

const SubHeading = ({ title }) => {
  return (
    <>
      <div className="md:w-4/12 relative lg:w-4/12 mb-5 mx-auto text-center">
        <p className="text-darkAmber font-archivo border-b-4 pb-3 border-double border-lightAmber lg:text-xl font-semibold mb-2">
          - {title} -
        </p>
      </div>
    </>
  );
};

export default SubHeading;