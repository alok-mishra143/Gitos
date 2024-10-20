import React from "react";
import { ThemeToggleComponent } from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="z-20 flex w-full h-16 fixed items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md transition-all duration-300">
      <div className="flex items-center space-x-2 text-lg font-semibold">
        <p className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer">
          Git <span className="text-indigo-500 dark:text-indigo-400">OS</span>
        </p>
      </div>

      <div className="text-xl font-bold">
        Git{" "}
        <span className="text-indigo-500 dark:text-indigo-400">Leveling</span>
      </div>

      <div>
        <ThemeToggleComponent />
      </div>
    </nav>
  );
};

export default Navbar;
