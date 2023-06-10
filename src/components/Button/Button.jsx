const Button = ({ label, hover }) => {
  return (
    <button
      className={`
        shadow-sm bg-darkAmber text-white duration-300 rounded-full font-bold text-xs lg:text-base px-6 py-2
        ${hover ? "hover:bg-white hover:text-darkGray" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
