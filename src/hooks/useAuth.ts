import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "../redux/auth/authSelectors";
import { useAppSelector } from "../redux/hooks";

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
