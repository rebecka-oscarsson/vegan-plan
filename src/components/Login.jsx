import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const loginUser = {
      userName: userName,
      password: password,
    };
    onLogin(loginUser);

    setUserName("");
    setPassword("");
  };

  return (
    <div className="registrate_container">
      <h1> Login </h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="btn" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
