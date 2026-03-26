import React from "react";
import { Link } from "react-router-dom";

function FabricMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Fabric Module</h2>

      <div className="list-group">

        <Link to="/add-fabric" className="list-group-item list-group-item-action">
          Add Fabric
        </Link>

        <Link to="/update-fabric" className="list-group-item list-group-item-action">
          Update Fabric
        </Link>

        <Link to="/delete-fabric" className="list-group-item list-group-item-action">
          Delete Fabric
        </Link>

        <Link to="/view-fabric" className="list-group-item list-group-item-action">
          View Fabric
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default FabricMenu;