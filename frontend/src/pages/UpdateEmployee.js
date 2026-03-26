import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateEmployee() {

  const [formData, setFormData] = useState({
    employee_id:"",
    employee_name:"",
    gender:"",
    department:"",
    designation:"",
    salary:"",
    contact_number:"",
    email:"",
    address:"",
    hire_date:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    try {

      await api.put(
        `/employees/${formData.employee_id}`,
        formData
      );

      alert("Employee updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Update Employee</h2>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="employee_id" placeholder="Employee ID" value={formData.employee_id} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="employee_name" placeholder="Employee Name" value={formData.employee_name} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/employees-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default UpdateEmployee;