import Button from "../../../components/Button/Button";

const RegisterOrientation = () => {
  return (
    <div className="bg-darkGray hidden lg:flex items-center justify-center gap-32 py-12">
      <div>
        <h2 className="text-2xl uppercase mb-2 text-darkAmber font-bold">
          Register For Orientation
        </h2>
        <p className="text-white font-semibold w-4/5">
          New student orientation begins soon. Secure your date and register
          now!
        </p>
      </div>
      <div>
        <Button label={"Register"} fontbig={true} hover={true}></Button>
      </div>
    </div>
  );
};

export default RegisterOrientation;