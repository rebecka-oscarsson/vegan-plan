import React, { useState } from "react";

const Registrate = ({ onAddNewUser }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAdd = (e) => {
    e.preventDefault();

    const newUserObj = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
    };
    onAddNewUser(newUserObj);

    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registrate_container">
      <h1> Registrate</h1>
      <form onSubmit={onAdd}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="btn" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Registrate;
