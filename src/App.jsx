"use client";
import { Link } from "react-router-dom";
import "./App.css";
import React, { useContext, useState } from "react";
import UserContext from "./contexts/User";

function App() {
  const [error, setError] = useState("");
  const user = useContext(UserContext);

  let emailRegex = /\w\d@\w.\w/gi;
  const [userData, setUserData] = useState({
    userName: "",
    emailInput: "",
    imgSrc: "",
    password: "",
    ConfirmPassword: "",
  });
  const handleSubmit = (e) => {
    console.log(userData);
    e.preventDefault();
  };
  return (
    <>
      <form action="">
        <header>
          <h1>sign up</h1>
          <p className="error">{error}</p>
        </header>
        <div className="userName">
          <label htmlFor="user-name-input">user input</label>
          <input
            type="text"
            name="user-name-input"
            onChange={(e) => {
              setUserData({ ...userData, userName: e.target.value });
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="email-input">email</label>
          <input
            type="email"
            name="email-input"
            onChange={(e) => {
              if (!emailRegex.test(e.target.value)) {
                setError("Invalid email format");
              } else {
                setError("");
                setUserData({
                  ...userData,
                  emailInput: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="password">
          <label htmlFor="password-input">password</label>
          <input
            type="password"
            name="password-input"
            onChange={(e) => {
              if (e.target.value.length < 8) {
                setError("Password must be at least 8 characters long");
              } else {
                setError("");
                setUserData({
                  ...userData,
                  password: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="confirm-password">
          <label htmlFor="confirm-password-input">confirm password</label>
          <input
            type="password"
            name="confirm-password-input"
            onChange={(e) => {
              if (e.target.value !== userData.password) {
                setError("Passwords do not match");
              } else {
                setError("");
                setUserData({
                  ...userData,
                  ConfirmPassword: e.target.value,
                });
              }
            }}
          />
        </div>
        <button onClick={handleSubmit}>confirm</button>
      </form>
    </>
  );
}

export default App;
