import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">Task Manager</Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Tasks</Link>
        <Link to="/api" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">API Data</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
