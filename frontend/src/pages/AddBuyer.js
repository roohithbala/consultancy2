import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddBuyer() {

  const [formData, setFormData] = useState({
    buyer_name: "",
    company_name: "",
    country: "",
    contact_number: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

const handleSubmit = async () => {

  if (
    !formData.buyer_name ||
    !formData.company_name ||
    !formData.country ||
    !formData.contact_number ||
    !formData.email ||
    !formData.address
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    await api.post("/buyers", formData);

    alert("Buyer added successfully");

    setFormData({
      buyer_name:"",
      company_name:"",
      country:"",
      contact_number:"",
      email:"",
      address:""
    });

  } catch (err) {
    console.error(err);
    alert("Error adding buyer");
  }

};

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Buyer</h2>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="buyer_name" placeholder="Buyer Name" value={formData.buyer_name} onChange={handleChange}required/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange}required/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="country" placeholder="Country" value={formData.country} onChange={handleChange}required/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}required/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange}required/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3" name="address" placeholder="Address" value={formData.address} onChange={handleChange}required/>

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSubmit}>
        Save
      </button>

      <Link to="/buyers-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default AddBuyer;