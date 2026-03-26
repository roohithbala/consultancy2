import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateDyeing() {

  const [formData, setFormData] = useState({
  dyeing_id:"",
  fabric_id:"",
  supplier_id:"",
  dyeing_type:"",
  dyeing_unit_name:"",
  dyeing_date:"",
  status:""
});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    if(!formData.dyeing_id){
      alert("Enter Dyeing ID");
      return;
    }

    try {

      await api.put(
        `/dyeing/${formData.dyeing_id}`,
        formData
      );

      alert("Dyeing record updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Dyeing</h2>

      <input className="form-control mb-2" name="dyeing_id" placeholder="Dyeing ID" value={formData.dyeing_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="fabric_id" placeholder="Fabric ID" value={formData.fabric_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="dyeing_unit_name" placeholder="Dyeing Unit Name" value={formData.dyeing_unit_name} onChange={handleChange}/>
      <input type="date" className="form-control mb-2" name="dyeing_date" value={formData.dyeing_date} onChange={handleChange}/>
      <input
  className="form-control mb-2"
  name="supplier_id"
  placeholder="Supplier ID"
  value={formData.supplier_id}
  onChange={handleChange}
/>
      <select className="form-control mb-2" name="dyeing_type" value={formData.dyeing_type} onChange={handleChange}>
        <option value="">Select Dyeing Type</option>
        <option value="Visible">Visible</option>
        <option value="Invisible">Invisible</option>
      </select>

      <select className="form-control mb-3" name="status" value={formData.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="In Process">In Process</option>
        <option value="Completed">Completed</option>
      </select>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/dyeing-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateDyeing;