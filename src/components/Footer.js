import React from "react";

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
            <a href=" /dawnsportfolio" className="text-gray-300 hover:text-white">
              Visual Development
            </a>
            <a href=" /personal" className="text-gray-300 hover:text-white">
              Personal
            </a>
            <a href=" /about-contact" className="text-gray-300 hover:text-white">
              About / Contact
            </a>
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
