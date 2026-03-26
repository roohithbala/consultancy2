import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function AddFabric() {

  const [formData, setFormData] = useState({
    yarn_id: "",
    roll_count: "",
    fabric_type: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const clearForm = () => {
    setFormData({
      yarn_id: "",
      roll_count: "",
      fabric_type: "",
      quantity: ""
    });
  };

  const handleSave = async () => {

    if(!formData.yarn_id || !formData.roll_count || !formData.fabric_type || !formData.quantity){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/fabric",
        formData
      );

      alert("Fabric added successfully");

      clearForm();

    } catch(err){
      console.error(err);
      alert("Error adding fabric");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Fabric</h2>

      <input
        className="form-control mb-2"
        name="yarn_id"
        placeholder="Yarn ID"
        value={formData.yarn_id}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="roll_count"
        placeholder="Roll Count"
        value={formData.roll_count}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="fabric_type"
        placeholder="Fabric Type"
        value={formData.fabric_type}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <button className="btn btn-primary me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/fabric-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddFabric;