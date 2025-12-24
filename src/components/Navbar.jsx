import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../config/SectionsData/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to={navbarData.logo.link} className="flex items-center gap-2">
              {/* Optional: Add an actual SVG logo here if you have one, or check for image URL */}
              <span className="font-bold text-xl text-text tracking-tight">
                {navbarData.logo.text}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navbarData.links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-textSecondary hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={navbarData.cta.link}
              className="bg-primary text-secondary px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {navbarData.cta.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbarData.links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-textSecondary hover:text-primary hover:bg-surface"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-3">
              <Link
                to={navbarData.cta.link}
                className="block w-full text-center bg-primary text-secondary px-5 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {navbarData.cta.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
