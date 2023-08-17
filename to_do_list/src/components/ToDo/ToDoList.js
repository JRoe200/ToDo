import "./todo.css";
import toDo from "./ToDo";
import toDoForm from "./ToDoForm";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

function toDoList({ tasks, editTask, deleteTask, toggleCompleted }) {
  return (
    <div>
      <h1 className="h1ToDoList">Task to Complete</h1>
      <div className="tableDiv">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
              ></input>
              {task.text}
              <div className="editDelete">
                <button
                  className="editDeleteButton"
                  onClick={() => editTask(index, prompt("Enter Update"))}
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  className="editDeleteButton"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default toDoList;
