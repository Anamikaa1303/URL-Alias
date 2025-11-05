"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-6">
        {/* === Logo Section === */}
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-2xl">
            URL Alias
          </Link>
          <lord-icon
            src="https://cdn.lordicon.com/gsjfryhc.json"
            trigger="hover"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
        </div>

        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link href="/shorten" className="hover:text-gray-200 transition-colors">
            Shorten
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition-colors">
            Contact Us
          </Link>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg px-4 py-1 font-semibold">
                Try Now
              </button>
            </Link>
            <Link href="/support">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg px-4 py-1 font-semibold">
                Support
              </button>
            </Link>
          </div>
        </nav>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {/* === Mobile Navigation Menu === */}
      <div
        className={`md:hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:font-bold">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:font-bold">
            About
          </Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)} className="hover:font-bold">
            Shorten
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:font-bold">
            Contact Us
          </Link>

          {/* Buttons */}
          <Link href="/shorten" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg px-4 py-1 font-semibold">
              Try Now
            </button>
          </Link>
          <Link href="/support" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg px-4 py-1 font-semibold">
              Support
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
