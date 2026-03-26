import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateAccessory() {

  const [formData, setFormData] = useState({
    accessory_id:"",
    po_id:"",
    supplier_id:"",
    accessory_type:"",
    quantity:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    if(!formData.accessory_id){
      alert("Enter Accessory ID");
      return;
    }

    try {

      await api.put(
        `/accessories/${formData.accessory_id}`,
        formData
      );

      alert("Accessory updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Accessory</h2>

      <input className="form-control mb-2" name="accessory_id" placeholder="Accessory ID" value={formData.accessory_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="po_id" placeholder="Purchase Order ID" value={formData.po_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="supplier_id" placeholder="Supplier ID" value={formData.supplier_id} onChange={handleChange}/>

      <select className="form-control mb-2" name="accessory_type" value={formData.accessory_type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="Label">Label</option>
        <option value="Button">Button</option>
        <option value="Thread">Thread</option>
        <option value="Zipper">Zipper</option>
      </select>

      <input className="form-control mb-3" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/accessories-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateAccessory;