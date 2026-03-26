import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteBuyer() {

  const [buyerId, setBuyerId] = useState("");

  const handleDelete = async () => {

    try {

      await api.delete(`/buyers/${buyerId}`);

      alert("Buyer deleted successfully");

      setBuyerId("");

    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Buyer</h2>

      <input
        className="form-control mb-3"
        placeholder="Enter Buyer ID"
        value={buyerId}
        onChange={(e)=>setBuyerId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/buyers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteBuyer;