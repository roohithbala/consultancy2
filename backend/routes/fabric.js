const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD FABRIC
router.post("/", (req, res) => {

  const { yarn_id, roll_count, fabric_type, quantity } = req.body;

  const query = `
    INSERT INTO fabric (yarn_id, roll_count, fabric_type, quantity)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [yarn_id, roll_count, fabric_type, quantity],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error adding fabric");
      }

      res.send("Fabric added successfully");

    }
  );

});


// VIEW FABRIC
router.get("/", (req, res) => {

  const query = `
    SELECT * FROM fabric
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching fabric");
    }

    res.json(results);

  });

});


// UPDATE FABRIC
router.put("/:id", (req, res) => {

  const id = req.params.id;

  const { yarn_id, roll_count, fabric_type, quantity } = req.body;

  const query = `
    UPDATE fabric
    SET yarn_id=?, roll_count=?, fabric_type=?, quantity=?
    WHERE fabric_id=?
  `;

  db.query(
    query,
    [yarn_id, roll_count, fabric_type, quantity, id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Update failed");
      }

      res.send("Fabric updated successfully");

    }
  );

});


// DELETE FABRIC
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM fabric WHERE fabric_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Fabric deleted successfully");

    }
  );

});


module.exports = router;