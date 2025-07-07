import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  const base = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };
  return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>;
};

export default Button;
