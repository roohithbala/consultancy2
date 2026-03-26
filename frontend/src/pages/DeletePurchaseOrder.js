import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function DeletePurchaseOrder() {

  const [poId, setPoId] = useState("");

  const handleDelete = async () => {

    if(!poId){
      alert("Enter Purchase Order ID");
      return;
    }

    try {

      await api.delete(
        `/purchase-orders/${poId}`
      );

      alert("Purchase Order deleted successfully");

      setPoId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Purchase Order</h2>

      <input
        className="form-control mb-3"
        placeholder="Purchase Order ID"
        value={poId}
        onChange={(e)=>setPoId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/purchase-orders-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeletePurchaseOrder;