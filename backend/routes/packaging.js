const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD PACKAGING
router.post("/", (req, res) => {

  const { po_id, ironing_status, packaging_date, packaged_quantity } = req.body;

  const query = `
    INSERT INTO packaging (po_id, ironing_status, packaging_date, packaged_quantity)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [po_id, ironing_status, packaging_date, packaged_quantity],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error adding packaging record");
      }

      res.send("Packaging record added successfully");

    }
  );

});


// VIEW PACKAGING
router.get("/", (req, res) => {

  db.query("SELECT * FROM packaging", (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching packaging records");
    }

    res.json(results);

  });

});


// UPDATE PACKAGING
router.put("/:id", (req, res) => {

  const id = req.params.id;

  const { po_id, ironing_status, packaging_date, packaged_quantity } = req.body;

  const query = `
    UPDATE packaging
    SET po_id=?, ironing_status=?, packaging_date=?, packaged_quantity=?
    WHERE packaging_id=?
  `;

  db.query(
    query,
    [po_id, ironing_status, packaging_date, packaged_quantity, id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Update failed");
      }

      res.send("Packaging updated successfully");

    }
  );

});


// DELETE PACKAGING
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM packaging WHERE packaging_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Packaging deleted successfully");

    }
  );

});

module.exports = router;