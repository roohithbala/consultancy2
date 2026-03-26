import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function DeleteDyeing() {

  const [dyeingId, setDyeingId] = useState("");

  const handleDelete = async () => {

    if(!dyeingId){
      alert("Enter Dyeing ID");
      return;
    }

    try {

      await api.delete(
        `/dyeing/${dyeingId}`
      );

      alert("Dyeing record deleted");

      setDyeingId("");

    } catch(err){
      console.error(err);
      alert("Delete failed");
    }

  };

  return (
    <div className="container mt-4">

      <h2>Delete Dyeing</h2>

      <input
        className="form-control mb-3"
        placeholder="Dyeing ID"
        value={dyeingId}
        onChange={(e)=>setDyeingId(e.target.value)}
      />

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Delete
      </button>

      <Link to="/dyeing-menu" className="btn btn-secondary">
        Back
      </Link>

    </div>
  );
}

export default DeleteDyeing;