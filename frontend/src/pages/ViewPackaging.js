import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewPackaging() {

  const [packaging, setPackaging] = useState([]);

  const fetchPackaging = async () => {

    const res = await api.get(
      "/packaging"
    );

    setPackaging(res.data);

  };

  useEffect(()=>{
    fetchPackaging();
  },[]);

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Packaging Records</h2>

      <table className="w-full border-collapse text-left">

        <thead className="bg-slate-900 text-sm uppercase tracking-wider text-white">
          <tr>
            <th className="px-6 py-4 font-bold">ID</th>
            <th className="px-6 py-4 font-bold">PO ID</th>
            <th className="px-6 py-4 font-bold">Ironing Status</th>
            <th className="px-6 py-4 font-bold">Date</th>
            <th className="px-6 py-4 font-bold">Quantity</th>
          </tr>
        </thead>

        <tbody>

          {packaging.map((p)=>(
            <tr key={p.packaging_id}>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.packaging_id}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.po_id}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.ironing_status}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.packaging_date}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.packaged_quantity}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/packaging-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 mt-3 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default ViewPackaging;