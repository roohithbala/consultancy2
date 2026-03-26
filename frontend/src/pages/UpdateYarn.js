import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateYarn() {

  const [formData, setFormData] = useState({
    yarn_id:"",
    yarn_type:"",
    gsm:"",
    color:"",
    supplier_id:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    if(
      !formData.yarn_id ||
      !formData.yarn_type ||
      !formData.gsm ||
      !formData.color ||
      !formData.supplier_id
    ){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.put(
        `/yarn/${formData.yarn_id}`,
        formData
      );

      alert("Yarn updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Yarn</h2>

      <input className="form-control mb-2" name="yarn_id" placeholder="Yarn ID" value={formData.yarn_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="yarn_type" placeholder="Yarn Type" value={formData.yarn_type} onChange={handleChange}/>
      <input className="form-control mb-2" name="gsm" placeholder="GSM" value={formData.gsm} onChange={handleChange}/>
      <input className="form-control mb-2" name="color" placeholder="Color" value={formData.color} onChange={handleChange}/>
      <input className="form-control mb-3" name="supplier_id" placeholder="Supplier ID" value={formData.supplier_id} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/yarn-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateYarn;