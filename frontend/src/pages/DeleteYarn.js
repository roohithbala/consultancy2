import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteYarn() {

  const [yarnId, setYarnId] = useState("");

  const handleDelete = async () => {

    if(!yarnId){
      alert("Enter Yarn ID");
      return;
    }

    try {

      await api.delete(
        `/yarn/${yarnId}`
      );

      alert("Yarn deleted successfully");

      setYarnId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Yarn</h2>

      <input
        className="form-control mb-3"
        placeholder="Yarn ID"
        value={yarnId}
        onChange={(e)=>setYarnId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/yarn-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteYarn;