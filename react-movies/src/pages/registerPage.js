import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/movies-api";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await register(username, password);
      alert(response.msg); 
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2> Register </h2>
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
        <button onClick={handleRegister} style={{ marginRight: "10px" }}>
          Register
        </button>
    </div>
  );
};
export default RegisterPage;