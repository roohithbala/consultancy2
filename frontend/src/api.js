import axios from "axios";

// Centralized axios instance.
// Set REACT_APP_API_URL in Vercel environment variables to point to your Render backend.
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
});

export default api;
