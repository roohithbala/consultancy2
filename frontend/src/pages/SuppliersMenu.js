import React from "react";
import { Link } from "react-router-dom";

function SuppliersMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Suppliers Module</h2>

      <div className="list-group">

        <Link to="/add-supplier" className="list-group-item list-group-item-action">
          Add Supplier
        </Link>

        <Link to="/update-supplier" className="list-group-item list-group-item-action">
          Update Supplier
        </Link>

        <Link to="/delete-supplier" className="list-group-item list-group-item-action">
          Delete Supplier
        </Link>

        <Link to="/view-suppliers" className="list-group-item list-group-item-action">
          View Suppliers
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default SuppliersMenu;