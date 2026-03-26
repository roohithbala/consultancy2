import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddPackaging() {

  const [formData, setFormData] = useState({
    po_id: "",
    ironing_status: "Pending",
    packaging_date: "",
    packaged_quantity: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {

    try {

      await api.post(
        "/packaging",
        formData
      );

      alert("Packaging record added successfully");

    } catch(err){
      console.error(err);
      alert("Error adding packaging record");
    }

  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Packaging</h2>

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="po_id"
        placeholder="Purchase Order ID"
        value={formData.po_id}
        onChange={handleChange}
      />

      <select
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="ironing_status"
        value={formData.ironing_status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        type="date"
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="packaging_date"
        value={formData.packaging_date}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3"
        name="packaged_quantity"
        placeholder="Packaged Quantity"
        value={formData.packaged_quantity}
        onChange={handleChange}
      />

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/packaging-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddPackaging;