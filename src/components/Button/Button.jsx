const Button = ({ label, hover, fontbig }) => {
  return (
    <button
      className={`
        shadow-sm bg-darkAmber text-white duration-300 rounded-full font-bold px-6 py-2
        ${hover ? "hover:bg-white hover:text-darkGray" : ""}
        ${fontbig ? "text-lg px-10" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
