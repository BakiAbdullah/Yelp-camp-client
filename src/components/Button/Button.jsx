const Button = ({ label, hover, fontSmall }) => {
  return (
    <button
      className={`
        shadow-sm bg-darkAmber text-white duration-300 rounded-full font-bold text-xs lg:text-base px-6 py-2
        ${hover ? "hover:bg-white hover:text-darkGray" : ""}
        ${fontSmall ? "text-xs px-2 py-2" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
