import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function UpdatePackaging() {

  const [formData, setFormData] = useState({
    packaging_id:"",
    po_id:"",
    ironing_status:"",
    packaging_date:"",
    packaged_quantity:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    try {

      await api.put(
        `/packaging/${formData.packaging_id}`,
        formData
      );

      alert("Packaging updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Packaging</h2>

      <input className="form-control mb-2" name="packaging_id" placeholder="Packaging ID" value={formData.packaging_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="po_id" placeholder="Purchase Order ID" value={formData.po_id} onChange={handleChange}/>

      <select className="form-control mb-2" name="ironing_status" value={formData.ironing_status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <input type="date" className="form-control mb-2" name="packaging_date" value={formData.packaging_date} onChange={handleChange}/>

      <input className="form-control mb-3" name="packaged_quantity" placeholder="Quantity" value={formData.packaged_quantity} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/packaging-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdatePackaging;