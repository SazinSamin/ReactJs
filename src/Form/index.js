import React, { Component, useState } from "react";

export default function Form() {

  const [name, setName] = useState('Please enter a name');
  const [email, setEmail] = useState('23@gmail.com');
  const [password, setPassword] = useState('***');

  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    console.log("Form is submitted");
    const userDetails = {
      name, email, password
    }
    console.log(userDetails);
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
            value={name}
            onChange={handleName}
          ></input>
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
