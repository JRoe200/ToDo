import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <button className="logout">LogOut</button>
        </Link>
        <h2>What To-Do</h2>
      </header>
    </div>
  );
}

export default Header;
