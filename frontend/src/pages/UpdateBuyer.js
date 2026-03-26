import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateBuyer() {

  const [formData, setFormData] = useState({
    buyer_id:"",
    buyer_name:"",
    company_name:"",
    country:"",
    contact_number:"",
    email:"",
    address:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    // VALIDATION (same as Save)
    if(
      !formData.buyer_id ||
      !formData.buyer_name ||
      !formData.company_name ||
      !formData.country ||
      !formData.contact_number ||
      !formData.email ||
      !formData.address
    ){
      alert("Please fill all fields before updating");
      return;
    }

    try {

      await api.put(
        `/buyers/${formData.buyer_id}`,
        formData
      );

      alert("Buyer updated successfully");

      // clear form
      setFormData({
        buyer_id:"",
        buyer_name:"",
        company_name:"",
        country:"",
        contact_number:"",
        email:"",
        address:""
      });

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Buyer</h2>

      <input className="form-control mb-2" name="buyer_id" placeholder="Buyer ID" value={formData.buyer_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="buyer_name" placeholder="Buyer Name" value={formData.buyer_name} onChange={handleChange}/>
      <input className="form-control mb-2" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange}/>
      <input className="form-control mb-2" name="country" placeholder="Country" value={formData.country} onChange={handleChange}/>
      <input className="form-control mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}/>
      <input className="form-control mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      <input className="form-control mb-3" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/buyers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateBuyer;