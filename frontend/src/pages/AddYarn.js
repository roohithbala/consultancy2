import React, { useState } from "react";
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
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Yarn</h2>

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="yarn_type"
        placeholder="Yarn Type"
        value={formData.yarn_type}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="gsm"
        placeholder="GSM"
        value={formData.gsm}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3"
        name="supplier_id"
        placeholder="Supplier ID"
        value={formData.supplier_id}
        onChange={handleChange}
      />

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/yarn-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddYarn;