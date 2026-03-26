import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewEmployees() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {

    const res = await api.get(
      "/employees"
    );

    setEmployees(res.data);

  };

  useEffect(()=>{
    fetchEmployees();
  },[]);

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Employees List</h2>

      <table className="w-full border-collapse text-left">

        <thead className="bg-slate-900 text-sm uppercase tracking-wider text-white">
          <tr>
            <th className="px-6 py-4 font-bold">ID</th>
            <th className="px-6 py-4 font-bold">Name</th>
            <th className="px-6 py-4 font-bold">Department</th>
            <th className="px-6 py-4 font-bold">Designation</th>
            <th className="px-6 py-4 font-bold">Salary</th>
            <th className="px-6 py-4 font-bold">Contact</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((e)=>(
            <tr key={e.employee_id}>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{e.employee_id}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{e.employee_name}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{e.department}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{e.designation}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{e.salary}</td>
              <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{e.contact_number}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/employees-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 mt-3 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default ViewEmployees;