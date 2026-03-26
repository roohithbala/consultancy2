const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD YARN
router.post("/", (req, res) => {

  const { yarn_type, gsm, color, supplier_id } = req.body;

  // check supplier type first
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

    if (result[0].supplier_type !== "Yarn") {
      return res.status(400).send("Supplier must be a Yarn supplier");
    }

    const insertQuery = `
      INSERT INTO yarn (yarn_type, gsm, color, supplier_id)
      VALUES (?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [yarn_type, gsm, color, supplier_id],
      (err, result) => {

        if (err) {
          console.error(err);
          return res.status(500).send("Error adding yarn");
        }

        res.send("Yarn added successfully");

      }
    );

  });

});


// VIEW YARN
router.get("/", (req, res) => {

  const query = `
    SELECT * FROM yarn
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching yarn");
    }

    res.json(results);

  });

});


// UPDATE YARN
router.put("/:id", (req, res) => {

  const id = req.params.id;
  const { yarn_type, gsm, color, supplier_id } = req.body;

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

    if (result[0].supplier_type !== "Yarn") {
      return res.status(400).send("Supplier must be a Yarn supplier");
    }

    const updateQuery = `
      UPDATE yarn
      SET yarn_type=?, gsm=?, color=?, supplier_id=?
      WHERE yarn_id=?
    `;

    db.query(
      updateQuery,
      [yarn_type, gsm, color, supplier_id, id],
      (err, result) => {

        if (err) {
          console.error(err);
          return res.status(500).send("Update failed");
        }

        res.send("Yarn updated successfully");

      }
    );

  });

});


// DELETE YARN
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM yarn WHERE yarn_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Yarn deleted successfully");

    }
  );

});


module.exports = router;