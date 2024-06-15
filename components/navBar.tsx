import Link from "next/link";
import React from "react";
import "../components/nav.module.css";

const NavBar = () => {
  return (
    <div className="fixed top-6 w-full z-50">
      <div className="bg-slate-900 rounded-3xl w-[15%] flex p-3 items-center justify-between text-white mx-auto transition-transform duration-300 hover:scale-110 shadow-xl">
        <Link
          href=""
          className="flex-1 text-center transition-all duration-300 hover:text-gray-400 hover:scale-90 text-[14px]"
        >
          Home
        </Link>
        <Link
          href=""
          className="flex-1 text-center transition-all duration-300 hover:text-gray-400 hover:scale-90 text-sm"
        >
          Projects
        </Link>
        <Link
          href=""
          className="flex-1 text-center transition-all duration-300 hover:text-gray-400 hover:scale-90 text-sm"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
