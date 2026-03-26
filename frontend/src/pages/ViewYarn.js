import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function ViewYarn() {

  const [yarn, setYarn] = useState([]);

  const fetchYarn = async () => {

    const res = await api.get(
      "/yarn"
    );

    setYarn(res.data);

  };

  useEffect(()=>{
    fetchYarn();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Yarn List</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>GSM</th>
            <th>Color</th>
            <th>Supplier ID</th>
          </tr>
        </thead>

        <tbody>

          {yarn.map((y)=>(
            <tr key={y.yarn_id}>
              <td>{y.yarn_id}</td>
              <td>{y.yarn_type}</td>
              <td>{y.gsm}</td>
              <td>{y.color}</td>
              <td>{y.supplier_id}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/yarn-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewYarn;