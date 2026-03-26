import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewBuyers() {

  const [buyers, setBuyers] = useState([]);

  const fetchBuyers = async () => {
    try {
      const res = await api.get("/buyers");
      setBuyers(res.data);
    } catch (err) {
      console.error("Error fetching buyers:", err);
    }
  };

  useEffect(()=>{
    fetchBuyers();
  },[]);

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Buyers List</h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

        <table className="w-full border-collapse text-left">

          <thead className="bg-slate-900 text-sm uppercase tracking-wider text-white">
            <tr>
              <th className="px-6 py-4 font-bold">ID</th>
              <th className="px-6 py-4 font-bold">Buyer Name</th>
              <th className="px-6 py-4 font-bold">Company</th>
              <th className="px-6 py-4 font-bold">Country</th>
              <th className="px-6 py-4 font-bold">Contact Number</th>
              <th className="px-6 py-4 font-bold">Email</th>
              <th className="px-6 py-4 font-bold">Address</th>
            </tr>
          </thead>

          <tbody>

            {buyers.map((b)=>(
              <tr key={b.buyer_id}>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.buyer_id}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.buyer_name}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.company_name}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.country}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.contact_number}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.email}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{b.address}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <Link to="/buyers-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 mt-3 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default ViewBuyers;