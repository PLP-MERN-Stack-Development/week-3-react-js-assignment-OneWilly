import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">React Task Manager</h1>
        <p className="mb-6">Manage tasks and explore API data</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/tasks">
            <Button variant="primary">Task Manager</Button>
          </Link>
          <Link to="/api">
            <Button variant="secondary">API Explorer</Button>
          </Link>
          <Button onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-bold mb-3">Task Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Add/delete tasks</li>
            <li>Mark as completed</li>
            <li>Filter tasks</li>
            <li>Local storage</li>
          </ul>
        </Card>
        
        <Card>
          <h2 className="text-xl font-bold mb-3">API Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fetch from JSONPlaceholder</li>
            <li>Search functionality</li>
            <li>Pagination</li>
            <li>Loading states</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
