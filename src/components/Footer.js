import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm text-gray-300">
              © 2024 Animation Portfolio. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <NavLink to="/dawnsportfolio" className="text-gray-300 hover:text-white">
              Visual Development
            </NavLink>
            <NavLink to="/personal" className="text-gray-300 hover:text-white">
              Personal
            </NavLink>
            <NavLink to="/about-contact" className="text-gray-300 hover:text-white">
              About / Contact
            </NavLink>
          </div>
          <div className="mt-2">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/raymondtt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-500"
            >
              Raymond
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
