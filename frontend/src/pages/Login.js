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
    <div className="flex h-screen items-center justify-center bg-slate-900 font-sans antialiased animate-fade">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-2xl">
        <header className="mb-10 text-center">
          <h3 className="mb-2 text-3xl font-black tracking-tight text-white font-display">
            Lara Knitwear
          </h3>
          <p className="text-slate-400 font-medium">
            Inventory management system
          </p>
        </header>

        <div className="space-y-4">
          <div>
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="mt-6 w-full rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-indigo-500/25 active:scale-95"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>

        <footer className="mt-8 text-center text-sm text-slate-500">
          &copy; 2026 Lara Knitwear. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Login;