import React, { useState } from "react";

const Navbar = ({ logoLink, links, roundedHeaderButton = false }) => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavbar = () => setShowNavLinks(!showNavLinks);

  const defaultLinks = (
    <div className="inline-block">
      <a href="/#" className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500">
        About
      </a>
      <a href="/#" className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500">
        Blog
      </a>
      <a href="/#" className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500">
        Pricing
      </a>
      <a href="/#" className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500">
        Contact Us
      </a>
      <a href="/#" className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-500 lg:ml-12">
        Login
      </a>
      <a href="/#" className={`lg:mx-0 px-8 py-3 rounded ${roundedHeaderButton ? 'rounded-full' : ''} bg-primary-500 text-gray-100 hover:bg-primary-700 hover:text-gray-200 focus:shadow-outline border-b-0`}>
        Sign Up
      </a>
    </div>
  );

  const defaultLogoLink = (
    <a href="/" className="flex items-center font-black text-2xl no-underline">
      <img src="https://via.placeholder.com/40" alt="logo" className="w-10 mr-3" />
      Placeholder
    </a>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex flex-1 justify-between items-center">
        {logoLink}
        {links}
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex flex-1 items-center justify-between lg:hidden">
        {logoLink}
        <button onClick={toggleNavbar} className="lg:hidden z-20 focus:outline-none hover:text-primary-500 transition duration-300">
          {showNavLinks ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Nav Links */}
      {showNavLinks && (
        <div className="lg:hidden fixed top-0 left-0 right-0 mt-16 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white z-10">
          {links}
        </div>
      )}
    </header>
  );
};

export default Navbar;
