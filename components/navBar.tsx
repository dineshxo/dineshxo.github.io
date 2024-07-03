import Link from "next/link";
import React from "react";
import styles from "../components/nav.module.css";

const NavBar = () => {
  return (
    <div className="fixed top-6 w-full z-50 flex justify-center">
      <div
        className={`bg-slate-900 rounded-3xl w-[250px] flex p-3 items-center justify-between text-white transition-transform duration-300 hover:scale-110 shadow-xl ${styles["glass-effect"]}`}
      >
        <Link
          href=""
          className="flex-1 text-center transition-all duration-300 hover:text-lime hover:scale-90 text-[14px]"
        >
          Home
        </Link>
        <Link
          href=""
          className="flex-1 text-center transition-all duration-300 hover:text-lime hover:scale-90 text-sm"
        >
          Projects
        </Link>
        <Link
          href=""
          className="flex-1 text-center transition-all duration-300 hover:text-lime hover:scale-90 text-sm"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
