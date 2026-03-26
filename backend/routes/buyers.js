const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD BUYER
router.post("/", (req, res) => {

  const { buyer_name, company_name, country, contact_number, email, address } = req.body;

  const query = `
    INSERT INTO buyers (buyer_name, company_name, country, contact_number, email, address)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [buyer_name, company_name, country, contact_number, email, address],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error inserting buyer");
      }

      res.send("Buyer added successfully");

    }
  );

});


// GET ALL BUYERS
router.get("/", (req, res) => {

  db.query("SELECT * FROM buyers", (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching buyers");
    }

    res.json(results);

  });

});


// UPDATE BUYER
router.put("/:id", (req, res) => {

  const id = req.params.id;

  const { buyer_name, company_name, country, contact_number, email, address } = req.body;

  const query = `
    UPDATE buyers
    SET buyer_name=?, company_name=?, country=?, contact_number=?, email=?, address=?
    WHERE buyer_id=?
  `;

  db.query(
    query,
    [buyer_name, company_name, country, contact_number, email, address, id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Update failed");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Buyer not found");
      }

      res.send("Buyer updated successfully");

    }
  );

});


// DELETE BUYER
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM buyers WHERE buyer_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Buyer not found");
      }

      res.send("Buyer deleted successfully");

    }
  );

});


module.exports = router;