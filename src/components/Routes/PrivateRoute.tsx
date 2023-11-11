import { useAuth } from "../../hooks";
import { Navigate } from "react-router-dom";
import { RouteProps } from "./routes.types";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: RouteProps) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
