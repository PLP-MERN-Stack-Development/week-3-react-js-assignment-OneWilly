import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-auto">
    <div className="container mx-auto px-6 text-center">
      <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Task Manager App</p>
    </div>
  </footer>
);

export default Footer;
