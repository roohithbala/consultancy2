const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD ACCESSORY
router.post("/", (req, res) => {

  const { po_id, supplier_id, accessory_type, quantity } = req.body;

  const checkQuery = `
    SELECT supplier_type
    FROM suppliers
    WHERE supplier_id = ?
  `;

  db.query(checkQuery, [supplier_id], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    if (result.length === 0) {
      return res.status(400).send("Supplier does not exist");
    }

    if (result[0].supplier_type !== accessory_type) {
      return res.status(400).send("Supplier type does not match accessory type");
    }

    const insertQuery = `
      INSERT INTO accessories (po_id, supplier_id, accessory_type, quantity)
      VALUES (?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [po_id, supplier_id, accessory_type, quantity],
      (err, result) => {

        if (err) {
          console.error(err);
          return res.status(500).send("Error adding accessory");
        }

        res.send("Accessory added successfully");

      }
    );

  });

});


// VIEW ACCESSORIES
router.get("/", (req, res) => {

  const query = `
    SELECT * FROM accessories
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching accessories");
    }

    res.json(results);

  });

});


// UPDATE ACCESSORY
router.put("/:id", (req, res) => {

  const id = req.params.id;
  const { po_id, supplier_id, accessory_type, quantity } = req.body;

  const checkQuery = `
    SELECT supplier_type
    FROM suppliers
    WHERE supplier_id = ?
  `;

  db.query(checkQuery, [supplier_id], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    if (result.length === 0) {
      return res.status(400).send("Supplier does not exist");
    }

    if (result[0].supplier_type !== accessory_type) {
      return res.status(400).send("Supplier type does not match accessory type");
    }

    const updateQuery = `
      UPDATE accessories
      SET po_id=?, supplier_id=?, accessory_type=?, quantity=?
      WHERE accessory_id=?
    `;

    db.query(
      updateQuery,
      [po_id, supplier_id, accessory_type, quantity, id],
      (err, result) => {

        if (err) {
          console.error(err);
          return res.status(500).send("Update failed");
        }

        res.send("Accessory updated successfully");

      }
    );

  });

});


// DELETE ACCESSORY
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM accessories WHERE accessory_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Accessory deleted successfully");

    }
  );

});


module.exports = router;