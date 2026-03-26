import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Login from "./pages/Login";

import BuyersMenu from "./pages/BuyersMenu";
import AddBuyer from "./pages/AddBuyer";
import UpdateBuyer from "./pages/UpdateBuyer";
import DeleteBuyer from "./pages/DeleteBuyer";
import ViewBuyers from "./pages/ViewBuyers";

import PurchaseOrdersMenu from "./pages/PurchaseOrdersMenu";
import AddPurchaseOrder from "./pages/AddPurchaseOrder";
import UpdatePurchaseOrder from "./pages/UpdatePurchaseOrder";
import DeletePurchaseOrder from "./pages/DeletePurchaseOrder";
import ViewPurchaseOrders from "./pages/ViewPurchaseOrders";

import SuppliersMenu from "./pages/SuppliersMenu";
import AddSupplier from "./pages/AddSupplier";
import UpdateSupplier from "./pages/UpdateSupplier";
import DeleteSupplier from "./pages/DeleteSupplier";
import ViewSuppliers from "./pages/ViewSuppliers";

import YarnMenu from "./pages/YarnMenu";
import AddYarn from "./pages/AddYarn";
import UpdateYarn from "./pages/UpdateYarn";
import DeleteYarn from "./pages/DeleteYarn";
import ViewYarn from "./pages/ViewYarn";

import FabricMenu from "./pages/FabricMenu";
import AddFabric from "./pages/AddFabric";
import UpdateFabric from "./pages/UpdateFabric";
import DeleteFabric from "./pages/DeleteFabric";
import ViewFabric from "./pages/ViewFabric";

import DyeingMenu from "./pages/DyeingMenu";
import AddDyeing from "./pages/AddDyeing";
import UpdateDyeing from "./pages/UpdateDyeing";
import DeleteDyeing from "./pages/DeleteDyeing";
import ViewDyeing from "./pages/ViewDyeing";

import AccessoriesMenu from "./pages/AccessoriesMenu";
import AddAccessory from "./pages/AddAccessory";
import UpdateAccessory from "./pages/UpdateAccessory";
import DeleteAccessory from "./pages/DeleteAccessory";
import ViewAccessories from "./pages/ViewAccessories";

import EmployeesMenu from "./pages/EmployeesMenu";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import ViewEmployees from "./pages/ViewEmployees";

import PackagingMenu from "./pages/PackagingMenu";
import AddPackaging from "./pages/AddPackaging";
import UpdatePackaging from "./pages/UpdatePackaging";
import DeletePackaging from "./pages/DeletePackaging";
import ViewPackaging from "./pages/ViewPackaging";

import ProductionMenu from "./pages/ProductionMenu";
import AddProduction from "./pages/AddProduction";
import UpdateProduction from "./pages/UpdateProduction";
import DeleteProduction from "./pages/DeleteProduction";
import ViewProduction from "./pages/ViewProduction";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/" />;
  }

  return children;
}


// ✅ DASHBOARD
function Dashboard() {

  const modules = [
    "Buyers",
    "Purchase Orders",
    "Yarn",
    "Fabric",
    "Dyeing",
    "Suppliers",
    "Accessories",
    "Production Process",
    "Employees",
    "Packaging"
  ];

  const routes = {
    "Buyers": "/buyers-menu",
    "Purchase Orders": "/purchase-orders-menu",
    "Yarn": "/yarn-menu",
    "Fabric": "/fabric-menu",
    "Dyeing": "/dyeing-menu",
    "Suppliers": "/suppliers-menu",
    "Accessories": "/accessories-menu",
    "Production Process": "/production-menu",
    "Employees": "/employees-menu",
    "Packaging": "/packaging-menu"
  };

  return (
    <div style={{ background:"#f4f6f9", minHeight:"100vh" }}>

      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">

        <span className="navbar-brand mb-0 h1">
          Lara Knitwear System
        </span>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/";
          }}
        >
          Logout
        </button>

      </nav>

      <div className="container mt-5">

        <h2 className="text-center mb-5 fw-bold">
          Management Dashboard
        </h2>

        <div className="row g-4">

          {modules.map((module, index) => (
            <div className="col-md-4" key={index}>

              <div
                className="card text-white shadow"
                style={{
                  borderRadius:"15px",
                  background:"linear-gradient(135deg,#3a7bd5,#00d2ff)"
                }}
              >

                <div className="card-body text-center">

                  <h5 className="card-title mb-4">
                    {module}
                  </h5>

                  <Link to={routes[module]} className="btn btn-light">
                    Open Module
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}


// ✅ APP ROUTES
function App() {
  return (
    <Router>

      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Buyers */}
        <Route path="/buyers-menu" element={<BuyersMenu />} />
        <Route path="/add-buyer" element={<AddBuyer />} />
        <Route path="/update-buyer" element={<UpdateBuyer />} />
        <Route path="/delete-buyer" element={<DeleteBuyer />} />
        <Route path="/buyers-list" element={<ViewBuyers />} />

        {/* Purchase Orders */}
        <Route path="/purchase-orders-menu" element={<PurchaseOrdersMenu />} />
        <Route path="/add-purchase-order" element={<AddPurchaseOrder />} />
        <Route path="/update-purchase-order" element={<UpdatePurchaseOrder />} />
        <Route path="/delete-purchase-order" element={<DeletePurchaseOrder />} />
        <Route path="/view-purchase-orders" element={<ViewPurchaseOrders />} />

        {/* Suppliers */}
        <Route path="/suppliers-menu" element={<SuppliersMenu />} />
        <Route path="/add-supplier" element={<AddSupplier />} />
        <Route path="/update-supplier" element={<UpdateSupplier />} />
        <Route path="/delete-supplier" element={<DeleteSupplier />} />
        <Route path="/view-suppliers" element={<ViewSuppliers />} />

        {/* Yarn */}
        <Route path="/yarn-menu" element={<YarnMenu />} />
        <Route path="/add-yarn" element={<AddYarn />} />
        <Route path="/update-yarn" element={<UpdateYarn />} />
        <Route path="/delete-yarn" element={<DeleteYarn />} />
        <Route path="/view-yarn" element={<ViewYarn />} />

        {/* Fabric */}
        <Route path="/fabric-menu" element={<FabricMenu />} />
        <Route path="/add-fabric" element={<AddFabric />} />
        <Route path="/update-fabric" element={<UpdateFabric />} />
        <Route path="/delete-fabric" element={<DeleteFabric />} />
        <Route path="/view-fabric" element={<ViewFabric />} />

        {/* Dyeing */}
        <Route path="/dyeing-menu" element={<DyeingMenu />} />
        <Route path="/add-dyeing" element={<AddDyeing />} />
        <Route path="/update-dyeing" element={<UpdateDyeing />} />
        <Route path="/delete-dyeing" element={<DeleteDyeing />} />
        <Route path="/view-dyeing" element={<ViewDyeing />} />

        {/* Accessories */}
        <Route path="/accessories-menu" element={<AccessoriesMenu />} />
        <Route path="/add-accessory" element={<AddAccessory />} />
        <Route path="/update-accessory" element={<UpdateAccessory />} />
        <Route path="/delete-accessory" element={<DeleteAccessory />} />
        <Route path="/view-accessories" element={<ViewAccessories />} />

        {/* Employees */}
        <Route path="/employees-menu" element={<EmployeesMenu />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/update-employee" element={<UpdateEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployee />} />
        <Route path="/view-employees" element={<ViewEmployees />} />

        {/* Packaging */}
        <Route path="/packaging-menu" element={<PackagingMenu />} />
        <Route path="/add-packaging" element={<AddPackaging />} />
        <Route path="/update-packaging" element={<UpdatePackaging />} />
        <Route path="/delete-packaging" element={<DeletePackaging />} />
        <Route path="/view-packaging" element={<ViewPackaging />} />

        <Route path="/production-menu" element={<ProductionMenu />} />
        <Route path="/add-production" element={<AddProduction />} />
        <Route path="/update-production" element={<UpdateProduction />} />
        <Route path="/delete-production" element={<DeleteProduction />} />
        <Route path="/view-production" element={<ViewProduction />} />

      </Routes>

    </Router>
  );
}

export default App;