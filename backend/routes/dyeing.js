const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD DYEING
router.post("/", (req, res) => {

  const { fabric_id, supplier_id, dyeing_type, dyeing_unit_name, dyeing_date, status } = req.body;

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

    if (result[0].supplier_type !== "Dye") {
      return res.status(400).send("Supplier must be a Dye supplier");
    }

    const insertQuery = `
      INSERT INTO dyeing (fabric_id, supplier_id, dyeing_type, dyeing_unit_name, dyeing_date, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [fabric_id, supplier_id, dyeing_type, dyeing_unit_name, dyeing_date, status],
      (err, result) => {

        if (err) {
          console.error(err);
          return res.status(500).send("Error adding dyeing record");
        }

        res.send("Dyeing record added successfully");

      }
    );

  });

});

// VIEW DYEING
router.get("/", (req, res) => {

  const query = `
    SELECT * FROM dyeing
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching dyeing records");
    }

    res.json(results);

  });

});


// UPDATE DYEING
router.put("/:id", (req, res) => {

  const id = req.params.id;
  const { fabric_id, supplier_id, dyeing_type, dyeing_unit_name, dyeing_date, status } = req.body;

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

    if (result[0].supplier_type !== "Dye") {
      return res.status(400).send("Supplier must be a Dye supplier");
    }

    const updateQuery = `
      UPDATE dyeing
      SET fabric_id=?, supplier_id=?, dyeing_type=?, dyeing_unit_name=?, dyeing_date=?, status=?
      WHERE dyeing_id=?
    `;

    db.query(
      updateQuery,
      [fabric_id, supplier_id, dyeing_type, dyeing_unit_name, dyeing_date, status, id],
      (err, result) => {

        if (err) {
          console.error(err);
          return res.status(500).send("Update failed");
        }

        res.send("Dyeing record updated successfully");

      }
    );

  });

});
// GET ALL DYEING UNITS (for dropdown)
router.get("/list", (req, res) => {

  const query = `
    SELECT dyeing_id, dyeing_unit_name
    FROM dyeing
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching dyeing units");
    }

    res.json(results);

  });

});

// DELETE DYEING
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM dyeing WHERE dyeing_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Dyeing record deleted successfully");

    }
  );

});

module.exports = router;
