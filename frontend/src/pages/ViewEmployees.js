import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function ViewEmployees() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {

    const res = await api.get(
      "/employees"
    );

    setEmployees(res.data);

  };

  useEffect(()=>{
    fetchEmployees();
  },[]);

  return (
    <div className="container mt-4">

      <h2>Employees List</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((e)=>(
            <tr key={e.employee_id}>
              <td>{e.employee_id}</td>
              <td>{e.employee_name}</td>
              <td>{e.department}</td>
              <td>{e.designation}</td>
              <td>{e.salary}</td>
              <td>{e.contact_number}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Link to="/employees-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default ViewEmployees;