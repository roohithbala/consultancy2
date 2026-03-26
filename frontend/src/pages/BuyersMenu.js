import React from "react";
import { Link } from "react-router-dom";

function BuyersMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Buyers Module</h2>

      <div className="list-group">

        <Link to="/add-buyer" className="list-group-item list-group-item-action">
          Add New Buyer
        </Link>

        <Link to="/update-buyer" className="list-group-item list-group-item-action">
          Update Buyer Details
        </Link>

        <Link to="/delete-buyer" className="list-group-item list-group-item-action">
          Delete Buyer
        </Link>

        <Link to="/buyers-list" className="list-group-item list-group-item-action">
          View Buyers
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default BuyersMenu;