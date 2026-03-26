import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function AddAccessory() {

  const [formData, setFormData] = useState({
    po_id: "",
    supplier_id: "",
    accessory_type: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {

    if(!formData.po_id || !formData.supplier_id || !formData.accessory_type || !formData.quantity){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/accessories",
        formData
      );

      alert("Accessory added successfully");

    } catch(err){
      console.error(err);
      alert("Error adding accessory");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Accessory</h2>

      <input
        className="form-control mb-2"
        name="po_id"
        placeholder="Purchase Order ID"
        value={formData.po_id}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="supplier_id"
        placeholder="Supplier ID"
        value={formData.supplier_id}
        onChange={handleChange}
      />

      <select
        className="form-control mb-2"
        name="accessory_type"
        value={formData.accessory_type}
        onChange={handleChange}
      >
        <option value="">Select Accessory Type</option>
        <option value="Label">Label</option>
        <option value="Button">Button</option>
        <option value="Thread">Thread</option>
        <option value="Zipper">Zipper</option>
      </select>

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

      <Link to="/accessories-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddAccessory;