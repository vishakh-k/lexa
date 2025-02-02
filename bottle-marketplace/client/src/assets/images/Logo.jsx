import React from "react";

export const LogoIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bottle Shape */}
    <path
      d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V5C15 5 16 5.5 16 6V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V6C8 5.5 9 5 9 5V3Z"
      className="fill-lexa-600"
    />
    {/* Bottle Cap */}
    <path d="M10 2H14V4H10V2Z" className="fill-lexa-700" />
    {/* Liquid Level */}
    <path
      d="M9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12V20C15 20.5523 14.5523 21 14 21H10C9.44772 21 9 20.5523 9 20V12Z"
      className="fill-lexa-400"
    />
  </svg>
);

export const LogoFull = ({ className = "w-32" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <LogoIcon className="w-8 h-8" />
    <div className="flex flex-col">
      <span className="text-2xl font-bold tracking-wider">
        <span className="text-lexa-600">L</span>
        <span className="text-lexa-500">E</span>
        <span className="text-lexa-600">X</span>
        <span className="text-lexa-500">A</span>
      </span>
      <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
        Premium Bottles
      </span>
    </div>
  </div>
);

// Dark version for footer
export const LogoFullDark = ({ className = "w-32" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <LogoIcon className="w-8 h-8" />
    <div className="flex flex-col">
      <span className="text-2xl font-bold tracking-wider text-white">
        <span className="text-lexa-400">L</span>
        <span className="text-lexa-300">E</span>
        <span className="text-lexa-400">X</span>
        <span className="text-lexa-300">A</span>
      </span>
      <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
        Premium Bottles
      </span>
    </div>
  </div>
);

export default LogoFull;
