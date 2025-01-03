import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/movies-api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await login(username, password);
      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
        <button onClick={handleLogin} style={{ marginRight: "10px" }}>
          Login
        </button>
    </div>
  );
};
export default LoginPage;