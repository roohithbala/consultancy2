import React, { useState } from "react";
import axios from "axios";
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
    <div className="container mt-4">

      <h2>Update Purchase Order</h2>

      <input className="form-control mb-2" name="po_id" placeholder="Purchase Order ID" value={formData.po_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="buyer_id" placeholder="Buyer ID" value={formData.buyer_id} onChange={handleChange}/>
      <input type="date" className="form-control mb-2" name="order_date" value={formData.order_date} onChange={handleChange}/>
      <input type="date" className="form-control mb-2" name="delivery_date" value={formData.delivery_date} onChange={handleChange}/>
      <input type="number" className="form-control mb-2" name="total_quantity" placeholder="Total Quantity" value={formData.total_quantity} onChange={handleChange}/>
      <input className="form-control mb-3" name="order_status" placeholder="Order Status" value={formData.order_status} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/purchase-orders-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdatePurchaseOrder;