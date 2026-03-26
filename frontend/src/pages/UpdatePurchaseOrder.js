import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function UpdatePurchaseOrder() {

  const [formData, setFormData] = useState({
    po_id: "",
    buyer_id: "",
    order_date: "",
    delivery_date: "",
    total_quantity: "",
    order_status: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const clearForm = () => {
    setFormData({
      po_id: "",
      buyer_id: "",
      order_date: "",
      delivery_date: "",
      total_quantity: "",
      order_status: ""
    });
  };

  const handleUpdate = async () => {

    if(
      !formData.po_id ||
      !formData.buyer_id ||
      !formData.order_date ||
      !formData.delivery_date ||
      !formData.total_quantity ||
      !formData.order_status
    ){
      alert("Please fill all fields before updating");
      return;
    }

    try {

      await api.put(
        `/purchase-orders/${formData.po_id}`,
        formData
      );

      alert("Purchase Order updated successfully");

      clearForm();

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl" style={{maxWidth: "800px", margin: "0 auto"}}>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Update Purchase Order</h2>

      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="po_id" placeholder="Purchase Order ID" value={formData.po_id} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="buyer_id" placeholder="Buyer ID" value={formData.buyer_id} onChange={handleChange}/>
      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="order_date" value={formData.order_date} onChange={handleChange}/>
      <input type="date" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="delivery_date" value={formData.delivery_date} onChange={handleChange}/>
      <input type="number" className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-2" name="total_quantity" placeholder="Total Quantity" value={formData.total_quantity} onChange={handleChange}/>
      <input className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 p-4 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 mb-3" name="order_status" placeholder="Order Status" value={formData.order_status} onChange={handleChange}/>

      <button className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/purchase-orders-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default UpdatePurchaseOrder;