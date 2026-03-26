import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewProduction() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api.get("/production");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching production data:", err);
    }
  };

  return (
    <div className="container mt-4">

      <h2>Production List</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>PO</th>
            <th>Dyeing Unit</th>
            <th>Cutting</th>
            <th>Dyeing</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.process_id}>
              <td>{p.process_id}</td>
              <td>{p.po_id}</td>
              <td>{p.dyeing_unit_name}</td>
              <td>{p.cutting_date}</td>
              <td>{p.dyeing_date}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/production-menu" className="btn btn-secondary">Back</Link>

    </div>
  );
}

export default ViewProduction;