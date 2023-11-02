import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>

      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
