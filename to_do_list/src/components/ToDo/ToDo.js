import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Header from "../Header/Header";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ToDo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], text: newText };
    setTasks(updatedTasks);
  };

  const deleteTask = ({ index }) => {
    const confirmation = window.confirm("Are you sure you want to Delete?");
    const updatedTasks = [...tasks];

    if (confirmation === true) {
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };
  
  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header />
      <div>
        <ToDoForm addTask={addTask} />
        <div>
          <ToDoList
            tasks={tasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
