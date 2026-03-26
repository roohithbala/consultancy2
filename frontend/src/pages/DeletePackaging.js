import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function DeletePackaging() {

  const [packagingId, setPackagingId] = useState("");

  const handleDelete = async () => {

    try {

      await api.delete(
        `/packaging/${packagingId}`
      );

      alert("Packaging deleted successfully");

      setPackagingId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Delete Packaging</h2>

      <input
        className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3"
        placeholder="Packaging ID"
        value={packagingId}
        onChange={(e)=>setPackagingId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/packaging-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeletePackaging;