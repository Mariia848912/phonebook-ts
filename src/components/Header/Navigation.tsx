import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <ul className="flex gap-[16px]">
        <li className="relative">
           <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li className="relative">
          {isLoggedIn && (
            <NavLink to="/contacts" className="link">
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
