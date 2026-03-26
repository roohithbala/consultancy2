import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateEmployee() {

  const [formData, setFormData] = useState({
    employee_id:"",
    employee_name:"",
    gender:"",
    department:"",
    designation:"",
    salary:"",
    contact_number:"",
    email:"",
    address:"",
    hire_date:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {

    try {

      await api.put(
        `/employees/${formData.employee_id}`,
        formData
      );

      alert("Employee updated successfully");

    } catch(err){
      console.error(err);
      alert("Update failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Update Employee</h2>

      <input className="form-control mb-2" name="employee_id" placeholder="Employee ID" value={formData.employee_id} onChange={handleChange}/>
      <input className="form-control mb-2" name="employee_name" placeholder="Employee Name" value={formData.employee_name} onChange={handleChange}/>
      <input className="form-control mb-2" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange}/>
      <input className="form-control mb-2" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange}/>
      <input className="form-control mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}/>
      <input className="form-control mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      <input className="form-control mb-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/employees-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateEmployee;