import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";
import { Link } from "react-router-dom";

function UpdateProduction() {

  const [formData, setFormData] = useState({
    process_id: "",
    po_id: "",
    fabric_id: "",
    dyeing_id: "",
    cutting_date: "",
    dyeing_date: "",
    combing_date: "",
    inspection_date: "",
    testing_date: "",
    status: "",
    remarks: ""
  });

  const [dyeingList, setDyeingList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // fetch dyeing dropdown
  useEffect(() => {
    fetchDyeing();
  }, []);

  const fetchDyeing = async () => {
    const res = await api.get("/dyeing/list");
    setDyeingList(res.data);
  };

  const handleUpdate = async () => {

    if (!formData.process_id) {
      alert("Enter Process ID");
      return;
    }

    try {

      await api.put(
        `/production/${formData.process_id}`,
        formData
      );

      alert("Production updated successfully");

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Update Production</h2>

      <input className="form-control mb-2" name="process_id" placeholder="Process ID" onChange={handleChange} />
      <input className="form-control mb-2" name="po_id" placeholder="PO ID" onChange={handleChange} />
      <input className="form-control mb-2" name="fabric_id" placeholder="Fabric ID" onChange={handleChange} />

      {/* Dyeing Dropdown */}
      <select className="form-control mb-2" name="dyeing_id" onChange={handleChange}>
        <option value="">Select Dyeing Unit</option>
        {dyeingList.map((d) => (
          <option key={d.dyeing_id} value={d.dyeing_id}>
            {d.dyeing_unit_name}
          </option>
        ))}
      </select>

      <input type="date" className="form-control mb-2" name="cutting_date" onChange={handleChange} />
      <input type="date" className="form-control mb-2" name="dyeing_date" onChange={handleChange} />
      <input type="date" className="form-control mb-2" name="combing_date" onChange={handleChange} />
      <input type="date" className="form-control mb-2" name="inspection_date" onChange={handleChange} />
      <input type="date" className="form-control mb-2" name="testing_date" onChange={handleChange} />

      <select className="form-control mb-2" name="status" onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input className="form-control mb-3" name="remarks" placeholder="Remarks" onChange={handleChange} />

      <button className="btn btn-primary me-2" onClick={handleUpdate}>
        Update
      </button>

      <Link to="/production-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default UpdateProduction;