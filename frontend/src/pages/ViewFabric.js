import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewFabric() {

  const [fabric, setFabric] = useState([]);

  const fetchFabric = async () => {

    const res = await api.get(
      "/fabric"
    );

    setFabric(res.data);

  };

  useEffect(()=>{
    fetchFabric();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Fabric List</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Yarn ID</th>
            <th>Roll Count</th>
            <th>Fabric Type</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>

          {fabric.map((f)=>(
            <tr key={f.fabric_id}>
              <td>{f.fabric_id}</td>
              <td>{f.yarn_id}</td>
              <td>{f.roll_count}</td>
              <td>{f.fabric_type}</td>
              <td>{f.quantity}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/fabric-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewFabric;