import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gray-100 flex flex-col items-center">
        <img className="max-w-xl" src="/plug-cuate.svg" alt="" />
        <button className="px-4 -mt-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
          <Link to='/'>back to homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
