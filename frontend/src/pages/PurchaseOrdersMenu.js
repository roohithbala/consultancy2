import React from "react";
import { Link } from "react-router-dom";

function PurchaseOrdersMenu() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Purchase Orders Module</h2>

      <div className="list-group">

        <Link to="/add-purchase-order" className="list-group-item list-group-item-action">
          Add Purchase Order
        </Link>

        <Link to="/update-purchase-order" className="list-group-item list-group-item-action">
          Update Purchase Order
        </Link>

        <Link to="/delete-purchase-order" className="list-group-item list-group-item-action">
          Delete Purchase Order
        </Link>

        <Link to="/view-purchase-orders" className="list-group-item list-group-item-action">
          View Purchase Orders
        </Link>

        <Link to="/" className="list-group-item list-group-item-action text-danger">
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default PurchaseOrdersMenu;