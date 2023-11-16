import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Container } from "./Common/Container";

export const SharedLayout = () => {
  return (
    <>
      <nav className="flex gap-[12px]	">
        <NavLink to="/" className='aria-[current=page]:text-cyan-400 '>Home</NavLink>
        <NavLink to="/login" className='aria-[current=page]:text-cyan-400 '>Login</NavLink>
        <NavLink to="/register" className='aria-[current=page]:text-cyan-400 '>Register</NavLink>
        <NavLink to="/contacts" className='aria-[current=page]:text-cyan-400 '>Contacts</NavLink>
      </nav>

      <Suspense>
        <main>
          <Container> 
            <Outlet />
            </Container>
        </main>
      </Suspense>
    </>
  );
};
