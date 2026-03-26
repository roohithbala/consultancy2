import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewSuppliers() {

  const [suppliers, setSuppliers] = useState([]);

  const fetchSuppliers = async () => {

    const res = await api.get(
      "/suppliers"
    );

    setSuppliers(res.data);

  };

  useEffect(()=>{
    fetchSuppliers();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Suppliers List</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>

          {suppliers.map((s)=>(
            <tr key={s.supplier_id}>
              <td>{s.supplier_id}</td>
              <td>{s.supplier_name}</td>
              <td>{s.supplier_type}</td>
              <td>{s.contact_number}</td>
              <td>{s.address}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/suppliers-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewSuppliers;