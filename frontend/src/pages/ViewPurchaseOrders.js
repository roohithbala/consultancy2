import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewPurchaseOrders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {

    const res = await api.get(
      "/purchase-orders"
    );

    setOrders(res.data);

  };

  useEffect(()=>{
    fetchOrders();
  },[]);

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade"><div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Purchase Orders List</h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

        <table className="w-full border-collapse text-left">

          <thead className="bg-slate-900 text-sm uppercase tracking-wider text-white">
            <tr>
              <th className="px-6 py-4 font-bold">PO ID</th>
              <th className="px-6 py-4 font-bold">Buyer ID</th>
              <th className="px-6 py-4 font-bold">Order Date</th>
              <th className="px-6 py-4 font-bold">Delivery Date</th>
              <th className="px-6 py-4 font-bold">Total Quantity</th>
              <th className="px-6 py-4 font-bold">Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((o)=>(
              <tr key={o.po_id}>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{o.po_id}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{o.buyer_id}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{o.order_date}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{o.delivery_date}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{o.total_quantity}</td>
                <td className="border-t border-slate-100 px-6 py-4 text-slate-600">{o.order_status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <Link to="/purchase-orders-menu" className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] bg-slate-200 text-slate-700 hover:bg-slate-300 mt-3 text-decoration-none">
        Back
      </Link>

    </div></div>
  );
}

export default ViewPurchaseOrders;