// src/components/Header.js

import { React, useState } from "react";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-blue-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Refer And Earn
              </a>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </a>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About US
              </a>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                LOGIN
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Refer and Earn
          </a>
          <a
            href="/"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Resources
          </a>
          <a
            href="/"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About us
          </a>
          <a
            href="/"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
