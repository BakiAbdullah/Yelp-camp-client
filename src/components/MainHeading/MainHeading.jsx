const MainHeading = ({title, subtitle}) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-gray-600 mt-2">{subtitle}</div>
    </div>
  );
};

export default MainHeading;