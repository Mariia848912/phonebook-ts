import { useAuth } from "../../hooks";
import { logOut } from "../../redux/auth/authOperations";
import { useAppDispatch } from "../../redux/hooks";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut}> Logout </button>
    </div>
  );
};
