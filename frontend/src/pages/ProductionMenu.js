import React from "react";
import { Link } from "react-router-dom";

function ProductionMenu() {
  return (
    <div className="container mt-5">

      <h2 className="mb-4">Production Process Module</h2>

      <div className="list-group">

        <Link to="/add-production" className="list-group-item list-group-item-action">
          Add Production
        </Link>

        <Link to="/update-production" className="list-group-item list-group-item-action">
          Update Production
        </Link>

        <Link to="/delete-production" className="list-group-item list-group-item-action">
          Delete Production
        </Link>

        <Link to="/view-production" className="list-group-item list-group-item-action">
          View Production
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default ProductionMenu;