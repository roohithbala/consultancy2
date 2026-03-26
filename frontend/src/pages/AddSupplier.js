import React, { useState } from "react";
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
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Supplier</h2>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="supplier_name" placeholder="Supplier Name" value={formData.supplier_name} onChange={handleChange}/>

      <select className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="supplier_type" value={formData.supplier_type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="Yarn">Yarn</option>
        <option value="Label">Label</option>
        <option value="Button">Button</option>
        <option value="Thread">Thread</option>
        <option value="Dye">Dye</option>
        <option value="Zipper">Zipper</option>
      </select>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}/>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/suppliers-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddSupplier;