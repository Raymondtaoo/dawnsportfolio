import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClasses =
    "text-black hover:text-opacity-60 px-4 py-2 transition-colors duration-300";
    const activeLinkClasses = "font-bold border-b-0 md:border-b-4 md:border-black";

  return (
    <nav className="bg-white px-4 py-2 shadow-md">
      <div className="nav-container">
        <h1 className="text-3xl font-bold">Dawn Kim</h1>
        <button
          className="md:hidden text-black menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul className={`md:flex ${isMenuOpen ? "block" : "hidden"} space-x-4`}>
          <li>
            <NavLink
              to="/dawnsportfolio"
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
              }
            >
              Visual Development
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/personal"
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
              }
            >
              Personal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-contact"
              className={({ isActive }) =>
                isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
              }
            >
              About / Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
