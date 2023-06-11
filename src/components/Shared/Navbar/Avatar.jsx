
import avatarImg from "/placeholder.jpg";
import { useAuth } from "../../../hooks/useAuth";

const Avatar = () => {
  const { user } = useAuth()
  return (
    <img
      className="rounded-full "
      referrerPolicy="no-referrer" // If user img not shows use this policy
      src={user ? user.photoURL : avatarImg}
      alt="profile"
      height="33" 
      width="33"
    />
  );
};

export default Avatar;
