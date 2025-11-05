import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : "hover:text-orange-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : "hover:text-orange-700"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : "hover:text-orange-700"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : "hover:text-orange-700"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52 text-gray-700 font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700 font-medium gap-3">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-sm rounded-full bg-orange-400 hover:bg-orange-700 text-white px-5">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
