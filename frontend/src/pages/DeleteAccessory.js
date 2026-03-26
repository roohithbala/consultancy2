import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteAccessory() {

  const [accessoryId, setAccessoryId] = useState("");

  const handleDelete = async () => {

    if(!accessoryId){
      alert("Enter Accessory ID");
      return;
    }

    try {

      await api.delete(
        `/accessories/${accessoryId}`
      );

      alert("Accessory deleted successfully");

      setAccessoryId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Accessory</h2>

      <input
        className="form-control mb-3"
        placeholder="Accessory ID"
        value={accessoryId}
        onChange={(e)=>setAccessoryId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/accessories-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteAccessory;