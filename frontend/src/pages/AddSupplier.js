import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function AddSupplier() {

  const [formData, setFormData] = useState({
    supplier_name: "",
    supplier_type: "",
    contact_number: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const clearForm = () => {
    setFormData({
      supplier_name: "",
      supplier_type: "",
      contact_number: "",
      address: ""
    });
  };

  const handleSave = async () => {

    if(
      !formData.supplier_name ||
      !formData.supplier_type ||
      !formData.contact_number ||
      !formData.address
    ){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/suppliers",
        formData
      );

      alert("Supplier added successfully");

      clearForm();

    } catch(err){
      console.error(err);
      alert("Error adding supplier");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Supplier</h2>

      <input className="form-control mb-2" name="supplier_name" placeholder="Supplier Name" value={formData.supplier_name} onChange={handleChange}/>

      <select className="form-control mb-2" name="supplier_type" value={formData.supplier_type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="Yarn">Yarn</option>
        <option value="Label">Label</option>
        <option value="Button">Button</option>
        <option value="Thread">Thread</option>
        <option value="Dye">Dye</option>
        <option value="Zipper">Zipper</option>
      </select>

      <input className="form-control mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}/>

      <input className="form-control mb-3" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/suppliers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddSupplier;