import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {

  return (
    <nav className="flex justify-between shadow-sm h-16 items-center">
      <Link to="/" className="py-4 px-7 text-xl">Pizza.</Link>
      <div className="lg:hidden md:hidden pr-7">
        <svg
        onClick={toggle}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="py-4 pr-7 hidden md:block">
          <Link to="/" className="p-4">Home</Link>
          <Link to="/menu" className="p-4">Menu</Link>
          <Link to="/about" className="p-4">About</Link>
          <Link to="/contact" className="p-4">Contact</Link>
      </div>
    </nav>
  );
};


export default Navbar;
