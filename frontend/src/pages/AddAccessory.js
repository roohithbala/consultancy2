import React, { useState } from "react";
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
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Accessory</h2>

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="po_id"
        placeholder="Purchase Order ID"
        value={formData.po_id}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="supplier_id"
        placeholder="Supplier ID"
        value={formData.supplier_id}
        onChange={handleChange}
      />

      <select
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
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
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/accessories-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddAccessory;