import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", username);
    navigate("/dashboard");
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        className="border rounded p-2 w-full mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
