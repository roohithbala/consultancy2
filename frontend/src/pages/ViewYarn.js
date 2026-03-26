import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewYarn() {

  const [yarn, setYarn] = useState([]);

  const fetchYarn = async () => {

    const res = await api.get(
      "/yarn"
    );

    setYarn(res.data);

  };

  useEffect(()=>{
    fetchYarn();
  },[]);

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Yarn List</h2>

      <table className="w-full border-collapse text-left">

        <thead className="bg-slate-900 text-sm uppercase tracking-wider text-white">
          <tr>
            <th className="px-6 py-4 font-bold">ID</th>
            <th className="px-6 py-4 font-bold">Type</th>
            <th className="px-6 py-4 font-bold">GSM</th>
            <th className="px-6 py-4 font-bold">Color</th>
            <th className="px-6 py-4 font-bold">Supplier ID</th>
          </tr>
        </thead>

        <tbody>

          {yarn.map((y)=>(
            <tr key={y.yarn_id}>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{y.yarn_id}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{y.yarn_type}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{y.gsm}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{y.color}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{y.supplier_id}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/yarn-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 mt-3 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default ViewYarn;