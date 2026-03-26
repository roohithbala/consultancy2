import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewProduction() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api.get("/production");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching production data:", err);
    }
  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Production List</h2>

      <table className="table table-bordered">
        <thead className="bg-slate-900 text-sm uppercase tracking-wider text-white">
          <tr>
            <th className="px-6 py-4 font-bold">ID</th>
            <th className="px-6 py-4 font-bold">PO</th>
            <th className="px-6 py-4 font-bold">Dyeing Unit</th>
            <th className="px-6 py-4 font-bold">Cutting</th>
            <th className="px-6 py-4 font-bold">Dyeing</th>
            <th className="px-6 py-4 font-bold">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.process_id}>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.process_id}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.po_id}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.dyeing_unit_name}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.cutting_date}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.dyeing_date}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/production-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 mt-3 text-decoration-none">Back</Link>

    </div></div>
  );
}

export default ViewProduction;