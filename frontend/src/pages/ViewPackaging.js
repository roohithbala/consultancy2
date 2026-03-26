import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function ViewPackaging() {

  const [packaging, setPackaging] = useState([]);

  const fetchPackaging = async () => {

    const res = await api.get(
      "/packaging"
    );

    setPackaging(res.data);

  };

  useEffect(()=>{
    fetchPackaging();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Packaging Records</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>PO ID</th>
            <th>Ironing Status</th>
            <th>Date</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>

          {packaging.map((p)=>(
            <tr key={p.packaging_id}>
              <td>{p.packaging_id}</td>
              <td>{p.po_id}</td>
              <td>{p.ironing_status}</td>
              <td>{p.packaging_date}</td>
              <td>{p.packaged_quantity}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/packaging-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewPackaging;