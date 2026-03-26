import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddPackaging() {

  const [formData, setFormData] = useState({
    po_id: "",
    ironing_status: "Pending",
    packaging_date: "",
    packaged_quantity: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {

    try {

      await api.post(
        "/packaging",
        formData
      );

      alert("Packaging record added successfully");

    } catch(err){
      console.error(err);
      alert("Error adding packaging record");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Packaging</h2>

      <input
        className="form-control mb-2"
        name="po_id"
        placeholder="Purchase Order ID"
        value={formData.po_id}
        onChange={handleChange}
      />

      <select
        className="form-control mb-2"
        name="ironing_status"
        value={formData.ironing_status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        type="date"
        className="form-control mb-2"
        name="packaging_date"
        value={formData.packaging_date}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        name="packaged_quantity"
        placeholder="Packaged Quantity"
        value={formData.packaged_quantity}
        onChange={handleChange}
      />

      <button className="btn btn-primary me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/packaging-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddPackaging;