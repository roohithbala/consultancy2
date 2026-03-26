import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function ViewDyeing() {

  const [dyeing, setDyeing] = useState([]);

  const fetchDyeing = async () => {

    const res = await api.get(
      "/dyeing"
    );

    setDyeing(res.data);

  };

  useEffect(()=>{
    fetchDyeing();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Dyeing Records</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Fabric ID</th>
            <th>Supplier ID</th>
            <th>Type</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {dyeing.map((d)=>(
            <tr key={d.dyeing_id}>
              <td>{d.dyeing_id}</td>
              <td>{d.fabric_id}</td>
              <td>{d.supplier_id}</td>
              <td>{d.dyeing_type}</td>
              <td>{d.dyeing_unit_name}</td>
              <td>{d.dyeing_date}</td>
              <td>{d.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/dyeing-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewDyeing;