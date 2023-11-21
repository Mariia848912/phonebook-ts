import { useAuth } from "../../hooks";
import { logOut } from "../../redux/auth/authOperations";
import { useAppDispatch } from "../../redux/hooks";
import { changeFirstLetter } from "../../utils/changeFirstLetter";
import { Button } from "../Common/Button";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div className="flex gap-sPlus items-center	">
      <p className="min-w-max ">Welcome, {changeFirstLetter(user.name)}</p>
      <Button type="button" text='Logout' onClick={handleLogOut} className='py-xs3 px-xs2 '/>
    </div>
  );
};
