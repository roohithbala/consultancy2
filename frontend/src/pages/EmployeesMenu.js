import React from "react";
import { Link } from "react-router-dom";

function EmployeesMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Employees Module</h2>

      <div className="list-group">

        <Link to="/add-employee" className="list-group-item list-group-item-action">
          Add Employee
        </Link>

        <Link to="/update-employee" className="list-group-item list-group-item-action">
          Update Employee
        </Link>

        <Link to="/delete-employee" className="list-group-item list-group-item-action">
          Delete Employee
        </Link>

        <Link to="/view-employees" className="list-group-item list-group-item-action">
          View Employees
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default EmployeesMenu;