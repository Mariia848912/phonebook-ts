import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" className="aria-[current=page]:text-cyan-400">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="aria-[current=page]:text-cyan-400">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
