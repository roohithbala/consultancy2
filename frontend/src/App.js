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
    { name: "Buyers", route: "/buyers-menu", icon: "👥" },
    { name: "Purchase Orders", route: "/purchase-orders-menu", icon: "📄" },
    { name: "Yarn", route: "/yarn-menu", icon: "🧶" },
    { name: "Fabric", route: "/fabric-menu", icon: "👕" },
    { name: "Dyeing", route: "/dyeing-menu", icon: "🧪" },
    { name: "Suppliers", route: "/suppliers-menu", icon: "🚚" },
    { name: "Accessories", route: "/accessories-menu", icon: "🎀" },
    { name: "Production Process", route: "/production-menu", icon: "⚙️" },
    { name: "Employees", route: "/employees-menu", icon: "👷" },
    { name: "Packaging", route: "/packaging-menu", icon: "📦" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12 animate-fade">
      {/* PREMIUM NAVBAR */}
      <nav className="sticky top-4 z-50 mx-4 mt-4 flex items-center justify-between rounded-2xl border border-white/30 bg-white/70 p-4 shadow-xl backdrop-blur-xl">
        <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-2xl font-black tracking-tight text-transparent">
          Lara Knitwear
        </span>

        <button
          className="rounded-xl bg-gradient-to-br from-red-500 to-rose-600 px-6 py-2 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-rose-200"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </nav>

      <div className="container mx-auto mt-12 px-4">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Management Dashboard
          </h1>
          <p className="text-lg text-slate-500">
            Welcome back. Select a module to manage your textile inventory.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col items-center justify-between rounded-3xl border border-white/40 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                  {module.icon}
                </div>
                <h5 className="mb-6 text-xl font-bold text-slate-800">{module.name}</h5>
                <Link
                  to={module.route}
                  className="w-full rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-indigo-200"
                >
                  Open Module
                </Link>
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