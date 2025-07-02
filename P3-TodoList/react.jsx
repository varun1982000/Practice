import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 border border-gray-400 p-2 rounded-l"
          placeholder="Enter task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-gray-100 p-2 my-1 rounded"
          >
            {t}
            <button onClick={() => removeTask(i)} className="text-red-500">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
