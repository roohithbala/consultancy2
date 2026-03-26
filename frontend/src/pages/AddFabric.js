import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddFabric() {

  const [formData, setFormData] = useState({
    yarn_id: "",
    roll_count: "",
    fabric_type: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const clearForm = () => {
    setFormData({
      yarn_id: "",
      roll_count: "",
      fabric_type: "",
      quantity: ""
    });
  };

  const handleSave = async () => {

    if(!formData.yarn_id || !formData.roll_count || !formData.fabric_type || !formData.quantity){
      alert("Please fill all fields");
      return;
    }

    try {

      await api.post(
        "/fabric",
        formData
      );

      alert("Fabric added successfully");

      clearForm();

    } catch(err){
      console.error(err);
      alert("Error adding fabric");
    }

  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Fabric</h2>

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="yarn_id"
        placeholder="Yarn ID"
        value={formData.yarn_id}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="roll_count"
        placeholder="Roll Count"
        value={formData.roll_count}
        onChange={handleChange}
      />

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2"
        name="fabric_type"
        placeholder="Fabric Type"
        value={formData.fabric_type}
        onChange={handleChange}
      />

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

      <Link to="/fabric-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddFabric;