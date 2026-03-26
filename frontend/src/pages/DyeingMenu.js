import React from "react";
import { Link } from "react-router-dom";

function DyeingMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Dyeing Module</h2>

      <div className="list-group">

        <Link to="/add-dyeing" className="list-group-item list-group-item-action">
          Add Dyeing
        </Link>

        <Link to="/update-dyeing" className="list-group-item list-group-item-action">
          Update Dyeing
        </Link>

        <Link to="/delete-dyeing" className="list-group-item list-group-item-action">
          Delete Dyeing
        </Link>

        <Link to="/view-dyeing" className="list-group-item list-group-item-action">
          View Dyeing
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default DyeingMenu;