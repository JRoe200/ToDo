import "./todo.css";
import React, { useState } from "react";

function ToDoForm({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const addNewTask = (event) => {
    event.preventDefault();

    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    } else {
      alert("Type in a Task");
    }
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div>
      <div className="move">
        <p className="pToDoForm">Please add a task.</p>
        <form onSubmit={addNewTask}>
          <input
            type="text"
            onChange={handleChange}
            placeholder=" Task"
            value={newTask}
          />
          <button className="addTaskButton" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default ToDoForm;
