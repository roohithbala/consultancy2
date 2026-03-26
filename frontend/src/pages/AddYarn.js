import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function AddYarn() {

  const [formData, setFormData] = useState({
    yarn_type: "",
    gsm: "",
    color: "",
    supplier_id: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const clearForm = () => {
    setFormData({
      yarn_type: "",
      gsm: "",
      color: "",
      supplier_id: ""
    });
  };

  const handleSave = async () => {

    if(
      !formData.yarn_type ||
      !formData.gsm ||
      !formData.color ||
      !formData.supplier_id
    ){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/yarn",
        formData
      );

      alert("Yarn added successfully");

      clearForm();

    } catch(err){
      console.error(err);
      alert("Error adding yarn");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Yarn</h2>

      <input
        className="form-control mb-2"
        name="yarn_type"
        placeholder="Yarn Type"
        value={formData.yarn_type}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="gsm"
        placeholder="GSM"
        value={formData.gsm}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        name="supplier_id"
        placeholder="Supplier ID"
        value={formData.supplier_id}
        onChange={handleChange}
      />

      <button className="btn btn-primary me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/yarn-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddYarn;