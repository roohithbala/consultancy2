import React from "react";
import { Link } from "react-router-dom";

function YarnMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Yarn Module</h2>

      <div className="list-group">

        <Link to="/add-yarn" className="list-group-item list-group-item-action">
          Add Yarn
        </Link>

        <Link to="/update-yarn" className="list-group-item list-group-item-action">
          Update Yarn
        </Link>

        <Link to="/delete-yarn" className="list-group-item list-group-item-action">
          Delete Yarn
        </Link>

        <Link to="/view-yarn" className="list-group-item list-group-item-action">
          View Yarn
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default YarnMenu;