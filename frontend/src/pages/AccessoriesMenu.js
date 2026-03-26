import React from "react";
import { Link } from "react-router-dom";

function AccessoriesMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Accessories Module</h2>

      <div className="list-group">

        <Link to="/add-accessory" className="list-group-item list-group-item-action">
          Add Accessory
        </Link>

        <Link to="/update-accessory" className="list-group-item list-group-item-action">
          Update Accessory
        </Link>

        <Link to="/delete-accessory" className="list-group-item list-group-item-action">
          Delete Accessory
        </Link>

        <Link to="/view-accessories" className="list-group-item list-group-item-action">
          View Accessories
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default AccessoriesMenu;