import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewAccessories() {

  const [accessories, setAccessories] = useState([]);

  const fetchAccessories = async () => {

    const res = await api.get(
      "/accessories"
    );

    setAccessories(res.data);

  };

  useEffect(()=>{
    fetchAccessories();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Accessories List</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>PO ID</th>
            <th>Supplier ID</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>

          {accessories.map((a)=>(
            <tr key={a.accessory_id}>
              <td>{a.accessory_id}</td>
              <td>{a.po_id}</td>
              <td>{a.supplier_id}</td>
              <td>{a.accessory_type}</td>
              <td>{a.quantity}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/accessories-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewAccessories;