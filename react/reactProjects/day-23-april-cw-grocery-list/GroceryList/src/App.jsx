import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("localtasker-tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("localtasker-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const clearAll = () => {
    setTasks([]);
  };


  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow bg-gray-100">
      <h1 className="text-2xl font-bold mb-5 text-center">Grocery List</h1>
      <div className="flex mb-10">
        <input
          type="text"
          className="flex-grow p-2 border rounded bg-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between mb-2"
          >
            <div className="flex items-center flex-grow">
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />
              <span
                className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
              >
                {task.text}
              </span>
            </div>
            <button
              className="ml-2 px-2 py-1 text-sm text-red-500 border border-red-500 rounded"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.some((task) => task.completed) && (
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded w-full"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      )}
      {tasks.length > 0 && (
        <button
          className="mt-2 px-4 py-2 bg-gray-700 text-white rounded w-full"
          onClick={clearAll}
        >
          Clear All
        </button>
      )}
    </div>
    </>
  )
}

export default App;
