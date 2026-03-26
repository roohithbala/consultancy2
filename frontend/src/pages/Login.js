import React, { useState } from "react";
import { useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await api.post("/auth/login", {
        username,
        password
      });
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{
      height: "100vh",
      background: "#0f172a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif"
    }}>

      <div style={{
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        padding: "40px",
        borderRadius: "16px",
        width: "350px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.1)"
      }}>

        <h3 style={{
          textAlign: "center",
          color: "white",
          fontWeight: "600"
        }}>
          Lara Knitwear
        </h3>

        <p style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "25px"
        }}>
          Database Management System
        </p>

        <input
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="btn w-100"
          style={{
            background: "#2563eb",
            color: "white",
            fontWeight: "600"
          }}
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;