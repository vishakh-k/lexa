import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    e.preventDefault(); // Prevent default button behavior
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Shop",
      path: "/shop",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      name: "About",
      path: "/about",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-lg ${
        isDarkMode
          ? "dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Updated Logo with premium fonts */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <svg
                className="w-full h-full text-lexa-600 dark:text-lexa-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 19v-5.5H8V19h3zm3 0v-5.5h-2V19h2zm3 0v-5.5h-2V19h2zM8 12.5V7H6v5.5h2zm3 0V7H9v5.5h2zm3 0V7h-2v5.5h2zm3 0V7h-2v5.5h2z" />
                <path d="M19 20H5V4h14v16zM5 2C3.9 2 3 2.9 3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5z" />
              </svg>
              <div className="absolute top-1 right-1 w-2 h-2 bg-lexa-400 dark:bg-lexa-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-lexa-400 dark:bg-lexa-300 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-lexa-800 dark:text-lexa-100 font-accent tracking-wider">
                LEXA
              </span>
              <span className="text-xs text-lexa-600 dark:text-lexa-400 font-heading tracking-widest uppercase">
                Premium Bottles
              </span>
            </div>
          </div>

          {/* Desktop Navigation with updated fonts */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="group flex items-center space-x-2 text-gray-700 dark:text-gray-200 relative py-2 font-heading"
              >
                <span className="transform group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="relative font-medium">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lexa-600 dark:bg-lexa-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Desktop Buttons with updated fonts */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-lexa-200 dark:hover:bg-gray-700 transition duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <a
              href="/login"
              className="px-4 py-2 text-lexa-600 hover:text-lexa-700 dark:text-lexa-400 font-heading font-medium hover:bg-lexa-50 dark:hover:bg-gray-800 rounded-full transition duration-300"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-6 py-2 bg-lexa-600 text-white rounded-full hover:bg-lexa-700 transition duration-300 font-heading font-medium"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-lexa-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-lexa-800 dark:text-gray-200 hover:bg-lexa-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lexa-800 hover:bg-lexa-100 dark:text-gray-200 dark:hover:bg-gray-700 transition duration-150"
              >
                {item.icon}
                <span className="font-heading">{item.name}</span>
              </a>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            <a
              href="/login"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-lexa-600 hover:text-lexa-800 dark:text-lexa-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span className="font-heading">Login</span>
            </a>
            <a
              href="/signup"
              className="flex items-center space-x-3 px-3 py-2 rounded-full bg-lexa-600 text-white hover:bg-lexa-700 transition duration-150 justify-center mt-2 mb-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <span className="font-heading">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
