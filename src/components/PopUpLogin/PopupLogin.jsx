import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const PopupLogin = () => {
  const { signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login Successfully!");
        console.log(result);
        // TODO: save user to db by using custom hook fetch

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };


  return (
    <div>
      <div className="py-6 space-x-4">
        <span className="w-10 h-10 hover:bg-lightAmber items-center justify-center inline-flex rounded-full font-bold text-lg border-2 hover:border-darkAmber cursor-pointer duration-200 border-white">
          f
        </span>
        <span
          onClick={handleGoogleSignIn}
          className="w-10 h-10 hover:bg-lightAmber  items-center justify-center inline-flex rounded-full font-bold text-lg border-2 hover:border-darkAmber cursor-pointer duration-200 border-white"
        >
          G+
        </span>
      </div>
    </div>
  );
};

export default PopupLogin;