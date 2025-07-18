const Button = ({ title }) => {
  return (
    <button
      className=" bg-paraBg font-bold text-2xl border-2  text-black px-4 py-2
       rounded-lg mt-1.5 hover:bg-heading transition duration-200"
    >
      {title}
    </button>
  );
};
export default Button;
