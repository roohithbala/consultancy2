import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteEmployee() {

  const [employeeId, setEmployeeId] = useState("");

  const handleDelete = async () => {

    try {

      await api.delete(
        `/employees/${employeeId}`
      );

      alert("Employee deleted successfully");

      setEmployeeId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Employee</h2>

      <input
        className="form-control mb-3"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e)=>setEmployeeId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/employees-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteEmployee;