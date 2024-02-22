import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <nav className="border-black m-2 p-4 md:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-lg text-white font-bold">DTO.</h1>
          </div>

          <div>
            <button
              onClick={toggleMenu}
              className="focus:outline-none border-1 border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-white border-2 border-white"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-start items-center p-4 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu} // Close menu when clicking on the overlay
          >
            <div className="p-2 w-full">
              <u>
                <a
                  href="#"
                  className="block text-white font-bold text-7xl mb-4 hover:text-gray-300"
                >
                  Home
                </a>
              </u>
              <a
                href="#"
                className="block text-white font-bold text-7xl mb-4 hover:text-gray-300"
              >
                Projects
              </a>
              <a
                href="#"
                className="block text-white font-bold text-7xl mb-4 hover:text-gray-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className="p-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-lg font-bold">DTO.</h1>
          </div>

          <div className="md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
