import React, { useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEnail] = useState("");
  const [password, usePassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    navigate("/ToDo");
  };

  return (
    <div>
      <Header />
      <div className="move">
        <h1 className="signinH1">Welcome to What To-Do!</h1>
        <p className="pSignUp">Please create an account below.</p>
        <form onSubmit={handleSignUp}>
          <label className="signupLabel">Username:</label>
          <input required type="text" placeholder="Username goes here" />
          <label className="signupLabel">Email:</label>
          <input required type="text" placeholder="youremail@blah.com" />
          <label className="signupLabel">Password:</label>
          <input required type="text" placeholder="*********" />

          <button type="submit" className="signupButton">
            Sign Up!
          </button>
        </form>
        <img
          className="img"
          src="https://youthfirstinc.org/wp-content/uploads/2019/04/Organizational-1030x688.jpg"
        />
      </div>
    </div>
  );
}

//<link to={'/ToDo'}>Sign Up</link>

export default SignUp;
