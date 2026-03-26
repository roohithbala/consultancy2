import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddDyeing() {

  const [formData, setFormData] = useState({
    fabric_id: "",
    supplier_id: "",
    dyeing_type: "",
    dyeing_unit_name: "",
    dyeing_date: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {

    if(!formData.fabric_id || !formData.supplier_id || !formData.dyeing_type || !formData.dyeing_date){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/dyeing",
        formData
      );

      alert("Dyeing record added successfully");

    } catch(err){
      console.error(err);
      alert("Error adding dyeing record");
    }

  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Dyeing</h2>

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="fabric_id"
        placeholder="Fabric ID"
        value={formData.fabric_id}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="supplier_id"
        placeholder="Supplier ID"
        value={formData.supplier_id}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="dyeing_unit_name"
        placeholder="Dyeing Unit Name"
        value={formData.dyeing_unit_name}
        onChange={handleChange}
      />

      <select
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="dyeing_type"
        value={formData.dyeing_type}
        onChange={handleChange}
      >
        <option value="">Select Dyeing Type</option>
        <option value="Visible">Visible</option>
        <option value="Invisible">Invisible</option>
      </select>

      <input
        type="date"
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="dyeing_date"
        value={formData.dyeing_date}
        onChange={handleChange}
      />

      <select
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Process">In Process</option>
        <option value="Completed">Completed</option>
      </select>

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/dyeing-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddDyeing;