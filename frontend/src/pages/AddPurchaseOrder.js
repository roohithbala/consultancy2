import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddPurchaseOrder() {

  const [formData, setFormData] = useState({
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
      buyer_id: "",
      order_date: "",
      delivery_date: "",
      total_quantity: "",
      order_status: ""
    });
  };


  const handleSave = async () => {

    // validation (same as buyers)
    if(
      !formData.buyer_id ||
      !formData.order_date ||
      !formData.delivery_date ||
      !formData.total_quantity ||
      !formData.order_status
    ){
      alert("Please fill all fields before saving");
      return;
    }

    try {

      await api.post(
        "/purchase-orders",
        formData
      );

      alert("Purchase Order added successfully");

      clearForm();

    } catch(err){
      console.error(err);
      alert("Error adding purchase order");
    }

  };


  return (
    <div className="container mt-4">

      <h2>Add Purchase Order</h2>

      <div className="card shadow p-4">

        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">Buyer ID</label>
            <input
              className="form-control"
              name="buyer_id"
              value={formData.buyer_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Order Date</label>
            <input
              type="date"
              className="form-control"
              name="order_date"
              value={formData.order_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Delivery Date</label>
            <input
              type="date"
              className="form-control"
              name="delivery_date"
              value={formData.delivery_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Total Quantity</label>
            <input
              type="number"
              className="form-control"
              name="total_quantity"
              value={formData.total_quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Order Status</label>
            <input
              className="form-control"
              name="order_status"
              placeholder="Pending / Processing / Completed"
              value={formData.order_status}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        <div className="mt-3">

          <button
            className="btn btn-primary me-2"
            onClick={handleSave}
          >
            Save
          </button>

          <Link to="/purchase-orders-menu" className="btn btn-secondary">
            Back
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AddPurchaseOrder; 