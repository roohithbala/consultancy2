import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function DeletePackaging() {

  const [packagingId, setPackagingId] = useState("");

  const handleDelete = async () => {

    try {

      await api.delete(
        `/packaging/${packagingId}`
      );

      alert("Packaging deleted successfully");

      setPackagingId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Packaging</h2>

      <input
        className="form-control mb-3"
        placeholder="Packaging ID"
        value={packagingId}
        onChange={(e)=>setPackagingId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/packaging-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeletePackaging;