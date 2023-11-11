import { useAuth } from "../../hooks";
import { Navigate } from 'react-router-dom';
import { RouteProps } from "./routes.types";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }:RouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
