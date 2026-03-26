import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteProduction() {

  const [processId, setProcessId] = useState("");

  const handleDelete = async () => {

    if (!processId) {
      alert("Enter Process ID");
      return;
    }

    try {

      await api.delete(
        `/production/${processId}`
      );

      alert("Production deleted successfully");

      setProcessId("");

    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Production</h2>

      <input
        className="form-control mb-3"
        placeholder="Process ID"
        value={processId}
        onChange={(e) => setProcessId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/production-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteProduction;