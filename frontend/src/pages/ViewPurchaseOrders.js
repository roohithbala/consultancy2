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
    <div className="container mt-4">

      <h2>Purchase Orders List</h2>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">
            <tr>
              <th>PO ID</th>
              <th>Buyer ID</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Total Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((o)=>(
              <tr key={o.po_id}>
                <td>{o.po_id}</td>
                <td>{o.buyer_id}</td>
                <td>{o.order_date}</td>
                <td>{o.delivery_date}</td>
                <td>{o.total_quantity}</td>
                <td>{o.order_status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <Link to="/purchase-orders-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewPurchaseOrders;