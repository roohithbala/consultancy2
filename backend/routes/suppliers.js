const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD SUPPLIER
router.post("/", (req, res) => {

  const { supplier_name, supplier_type, contact_number, address } = req.body;

  const query = `
    INSERT INTO suppliers (supplier_name, supplier_type, contact_number, address)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [supplier_name, supplier_type, contact_number, address],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error adding supplier");
      }

      res.send("Supplier added successfully");

    }
  );

});


// VIEW SUPPLIERS
router.get("/", (req, res) => {

  db.query(
    "SELECT * FROM suppliers",
    (err, results) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error fetching suppliers");
      }

      res.json(results);

    }
  );

});


// UPDATE SUPPLIER
router.put("/:id", (req, res) => {

  const id = req.params.id;

  const { supplier_name, supplier_type, contact_number, address } = req.body;

  const query = `
    UPDATE suppliers
    SET supplier_name=?, supplier_type=?, contact_number=?, address=?
    WHERE supplier_id=?
  `;

  db.query(
    query,
    [supplier_name, supplier_type, contact_number, address, id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Update failed");
      }

      res.send("Supplier updated successfully");

    }
  );

});


// DELETE SUPPLIER
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM suppliers WHERE supplier_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Supplier deleted successfully");

    }
  );

});


module.exports = router;