import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task"
            className="flex-grow px-4 py-2 border rounded-md"
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
          <Button onClick={addTask}>Add</Button>
        </div>
        
        <div className="flex gap-2 mb-4">
          <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>
            Active
          </Button>
          <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>
            Completed
          </Button>
        </div>
        
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <li key={task.id} className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mr-3 h-5 w-5"
                />
                <span className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </span>
              </div>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default TaskManager;
