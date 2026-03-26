import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewBuyers() {

  const [buyers, setBuyers] = useState([]);

  const fetchBuyers = async () => {
    try {
      const res = await api.get("/buyers");
      setBuyers(res.data);
    } catch (err) {
      console.error("Error fetching buyers:", err);
    }
  };

  useEffect(()=>{
    fetchBuyers();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Buyers List</h2>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Buyer Name</th>
              <th>Company</th>
              <th>Country</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>

            {buyers.map((b)=>(
              <tr key={b.buyer_id}>
                <td>{b.buyer_id}</td>
                <td>{b.buyer_name}</td>
                <td>{b.company_name}</td>
                <td>{b.country}</td>
                <td>{b.contact_number}</td>
                <td>{b.email}</td>
                <td>{b.address}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <Link to="/buyers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewBuyers;