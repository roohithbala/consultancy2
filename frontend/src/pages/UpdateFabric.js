import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateFabric() {

  const [formData, setFormData] = useState({
    fabric_id:"",
    yarn_id:"",
    roll_count:"",
    fabric_type:"",
    quantity:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    if(!formData.fabric_id || !formData.yarn_id || !formData.roll_count || !formData.fabric_type || !formData.quantity){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.put(
        `/fabric/${formData.fabric_id}`,
        formData
      );

      alert("Fabric updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Fabric</h2>

      <input className="form-control mb-2" name="fabric_id" placeholder="Fabric ID" value={formData.fabric_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="yarn_id" placeholder="Yarn ID" value={formData.yarn_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="roll_count" placeholder="Roll Count" value={formData.roll_count} onChange={handleChange}/>
      <input className="form-control mb-2" name="fabric_type" placeholder="Fabric Type" value={formData.fabric_type} onChange={handleChange}/>
      <input className="form-control mb-3" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/fabric-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateFabric;