import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 px-2 w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
      <p className="text-sm md:text-base font-medium text-center">
        © {new Date().getFullYear()} <span className="font-semibold">URL Alias</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

