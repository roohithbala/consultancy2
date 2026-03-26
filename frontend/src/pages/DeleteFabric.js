import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteFabric() {

  const [fabricId, setFabricId] = useState("");

  const handleDelete = async () => {

    if(!fabricId){
      alert("Enter Fabric ID");
      return;
    }

    try {

      await api.delete(
        `/fabric/${fabricId}`
      );

      alert("Fabric deleted successfully");

      setFabricId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Fabric</h2>

      <input
        className="form-control mb-3"
        placeholder="Fabric ID"
        value={fabricId}
        onChange={(e)=>setFabricId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/fabric-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteFabric;