import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function AddDyeing() {

  const [formData, setFormData] = useState({
    fabric_id: "",
    supplier_id: "",
    dyeing_type: "",
    dyeing_unit_name: "",
    dyeing_date: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {

    if(!formData.fabric_id || !formData.supplier_id || !formData.dyeing_type || !formData.dyeing_date){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/dyeing",
        formData
      );

      alert("Dyeing record added successfully");

    } catch(err){
      console.error(err);
      alert("Error adding dyeing record");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Dyeing</h2>

      <input
        className="form-control mb-2"
        name="fabric_id"
        placeholder="Fabric ID"
        value={formData.fabric_id}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="supplier_id"
        placeholder="Supplier ID"
        value={formData.supplier_id}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="dyeing_unit_name"
        placeholder="Dyeing Unit Name"
        value={formData.dyeing_unit_name}
        onChange={handleChange}
      />

      <select
        className="form-control mb-2"
        name="dyeing_type"
        value={formData.dyeing_type}
        onChange={handleChange}
      >
        <option value="">Select Dyeing Type</option>
        <option value="Visible">Visible</option>
        <option value="Invisible">Invisible</option>
      </select>

      <input
        type="date"
        className="form-control mb-2"
        name="dyeing_date"
        value={formData.dyeing_date}
        onChange={handleChange}
      />

      <select
        className="form-control mb-3"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Process">In Process</option>
        <option value="Completed">Completed</option>
      </select>

      <button className="btn btn-primary me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/dyeing-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddDyeing;