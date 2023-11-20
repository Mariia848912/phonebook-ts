import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className="aria-[current=page]:text-cyan-400">
        Log In
      </NavLink>
      <NavLink to="/register" className="aria-[current=page]:text-cyan-400">
        Register
      </NavLink>
    </div>
  );
};
