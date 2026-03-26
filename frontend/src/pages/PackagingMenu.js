import React from "react";
import { Link } from "react-router-dom";

function PackagingMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Packaging Module</h2>

      <div className="list-group">

        <Link to="/add-packaging" className="list-group-item list-group-item-action">
          Add Packaging
        </Link>

        <Link to="/update-packaging" className="list-group-item list-group-item-action">
          Update Packaging
        </Link>

        <Link to="/delete-packaging" className="list-group-item list-group-item-action">
          Delete Packaging
        </Link>

        <Link to="/view-packaging" className="list-group-item list-group-item-action">
          View Packaging
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default PackagingMenu;