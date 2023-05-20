import React, { Component, useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    name: "please enter your name",
    email: "@gmai.com",
    password: "***",
  });

  const handleChanage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form action="" onClick={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChanage}
          ></input>
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChanage}
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChanage}
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
