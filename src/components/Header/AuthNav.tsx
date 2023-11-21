import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <ul className="flex gap-[16px]">
      <li className="relative">
        <NavLink
          to="/login"
          className="link "
        >
          Log In
        </NavLink>
      </li>
      <li className="relative">
        <NavLink
          to="/register"
          className="link"
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};
// aria-[current=page]:text-cyan-400 after:content-[''] py-[16px]
    //  after:absolute after:bottom-[1px] after:left-0
    //   after:block after:w-full after:h-[4px]
//   after:bg-cyan-400 after:rounded-s hover:text-textBrand
    

/*
aria-[current=page]:text-cyan-400 aria-[current=page]:after:content-['']  py-[14px] px-[16px]
      aria-[current=page]:after:absolute aria-[current=page]:after:bottom-0 aria-[current=page]:after:left-0
      aria-[current=page]:after:block aria-[current=page]:after:w-full aria-[current=page]:after:h-xs3
      aria-[current=page]:after:text-cyan-400 aria-[current=page]:after:rounded-s hover:text-textBrand
*/