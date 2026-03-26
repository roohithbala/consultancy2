import React from "react";
import { Link } from "react-router-dom";

function EmployeesMenu() {

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Employees Module</h2>

      <div className="d-grid gap-3">

        <Link to="/add-employee" className="flex w-full items-center justify-between rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-md transition-all hover:-translate-y-1 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white hover:shadow-xl">
          Add Employee
        </Link>

        <Link to="/update-employee" className="flex w-full items-center justify-between rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-md transition-all hover:-translate-y-1 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white hover:shadow-xl">
          Update Employee
        </Link>

        <Link to="/delete-employee" className="flex w-full items-center justify-between rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-md transition-all hover:-translate-y-1 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white hover:shadow-xl">
          Delete Employee
        </Link>

        <Link to="/view-employees" className="flex w-full items-center justify-between rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-md transition-all hover:-translate-y-1 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white hover:shadow-xl">
          View Employees
        </Link>

        <Link to="/" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] text-start bg-gradient-to-br from-rose-500 to-red-600">
          Back to Dashboard
        </Link>

      </div>

    </div></div>
  );
}

export default EmployeesMenu;