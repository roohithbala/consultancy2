import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddBuyer() {

  const [formData, setFormData] = useState({
    buyer_name: "",
    company_name: "",
    country: "",
    contact_number: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

const handleSubmit = async () => {

  if (
    !formData.buyer_name ||
    !formData.company_name ||
    !formData.country ||
    !formData.contact_number ||
    !formData.email ||
    !formData.address
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    await api.post("/buyers", formData);

    alert("Buyer added successfully");

    setFormData({
      buyer_name:"",
      company_name:"",
      country:"",
      contact_number:"",
      email:"",
      address:""
    });

  } catch (err) {
    console.error(err);
    alert("Error adding buyer");
  }

};

  return (
    <div className="container mt-4">

      <h2>Add Buyer</h2>

      <input className="form-control mb-2" name="buyer_name" placeholder="Buyer Name" value={formData.buyer_name} onChange={handleChange}required/>
      <input className="form-control mb-2" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange}required/>
      <input className="form-control mb-2" name="country" placeholder="Country" value={formData.country} onChange={handleChange}required/>
      <input className="form-control mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}required/>
      <input className="form-control mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange}required/>
      <input className="form-control mb-3" name="address" placeholder="Address" value={formData.address} onChange={handleChange}required/>

      <button className="btn btn-primary me-2" onClick={handleSubmit}>
        Save
      </button>

      <Link to="/buyers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddBuyer;