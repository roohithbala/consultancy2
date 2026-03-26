import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteSupplier() {

  const [supplierId, setSupplierId] = useState("");

  const handleDelete = async () => {

    if(!supplierId){
      alert("Enter Supplier ID");
      return;
    }

    try {

      await api.delete(
        `/suppliers/${supplierId}`
      );

      alert("Supplier deleted successfully");

      setSupplierId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Supplier</h2>

      <input
        className="form-control mb-3"
        placeholder="Supplier ID"
        value={supplierId}
        onChange={(e)=>setSupplierId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/suppliers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteSupplier;