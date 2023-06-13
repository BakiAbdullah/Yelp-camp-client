import { useAuth } from "../../hooks/useAuth";


const UserHome = () => {
  const {user} = useAuth();

  return (
    <div>
      <h2 className="flex justify-center font-archivo mt-12 text-3xl text-darkAmber">
        <span className="text-darkGray pr-2">Welcome Back </span> {user?.displayName}
      </h2>
    </div>
  );
};

export default UserHome;