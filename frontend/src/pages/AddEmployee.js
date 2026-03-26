import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function AddEmployee() {

  const [formData, setFormData] = useState({
    employee_name: "",
    gender: "",
    department: "",
    designation: "",
    salary: "",
    contact_number: "",
    email: "",
    address: "",
    hire_date: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {

    try {

      await api.post(
        "/employees",
        formData
      );

      alert("Employee added successfully");

    } catch(err){
      console.error(err);
      alert("Error adding employee");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Add Employee</h2>

      <input className="form-control mb-2" name="employee_name" placeholder="Employee Name" value={formData.employee_name} onChange={handleChange}/>

      <select className="form-control mb-2" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <select className="form-control mb-2" name="department" value={formData.department} onChange={handleChange}>
        <option value="">Select Department</option>
        <option value="Accounts">Accounts</option>
        <option value="Production">Production</option>
        <option value="Buyer Handling">Buyer Handling</option>
      </select>

      <input className="form-control mb-2" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange}/>
      <input className="form-control mb-2" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange}/>
      <input className="form-control mb-2" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange}/>
      <input className="form-control mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      <input className="form-control mb-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange}/>
      <input type="date" className="form-control mb-3" name="hire_date" value={formData.hire_date} onChange={handleChange}/>

      <button className="btn btn-primary me-2" onClick={handleSave}>
        Save
      </button>

      <Link to="/employees-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default AddEmployee;