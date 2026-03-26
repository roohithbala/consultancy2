import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddProduction() {

  const [formData, setFormData] = useState({
    po_id: "",
    fabric_id: "",
    dyeing_id: "",
    cutting_date: "",
    dyeing_date: "",
    combing_date: "",
    inspection_date: "",
    testing_date: "",
    status: "",
    remarks: ""
  });

  const [dyeingList, setDyeingList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 fetch dyeing dropdown
  useEffect(() => {
    fetchDyeing();
  }, []);

  const fetchDyeing = async () => {
    const res = await api.get("/dyeing/list");
    setDyeingList(res.data);
  };

  const handleSave = async () => {

    if (!formData.po_id || !formData.dyeing_id) {
      alert("PO ID and Dyeing Unit required");
      return;
    }

    try {
      await api.post("/production", formData);
      alert("Production added successfully");

    } catch (err) {
      console.error(err);
      alert("Error adding production");
    }
  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Add Production Process</h2>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="po_id" placeholder="PO ID" onChange={handleChange} />
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="fabric_id" placeholder="Fabric ID" onChange={handleChange} />

      {/* 🔥 DYEING DROPDOWN */}
      <select className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="dyeing_id" onChange={handleChange}>
        <option value="">Select Dyeing Unit</option>
        {dyeingList.map((d) => (
          <option key={d.dyeing_id} value={d.dyeing_id}>
            {d.dyeing_unit_name}
          </option>
        ))}
      </select>

      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="cutting_date" onChange={handleChange} />
      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="dyeing_date" onChange={handleChange} />
      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="combing_date" onChange={handleChange} />
      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="inspection_date" onChange={handleChange} />
      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="testing_date" onChange={handleChange} />

      <select className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="status" onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3" name="remarks" placeholder="Remarks" onChange={handleChange} />

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleSave}>Save</button>
      <Link to="/production-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">Back</Link>

    </div></div>
  );
}

export default AddProduction;