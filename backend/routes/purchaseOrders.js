const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD PURCHASE ORDER
router.post("/", (req, res) => {

  const { buyer_id, order_date, delivery_date, total_quantity, order_status } = req.body;

  const query = `
    INSERT INTO purchase_orders (buyer_id, order_date, delivery_date, total_quantity, order_status)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [buyer_id, order_date, delivery_date, total_quantity, order_status],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error inserting purchase order");
      }

      res.send("Purchase order added successfully");

    }
  );

});


// VIEW ALL PURCHASE ORDERS
router.get("/", (req, res) => {

  const query = `
    SELECT po_id, buyer_id, order_date, delivery_date, total_quantity, order_status
    FROM purchase_orders
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching purchase orders");
    }

    res.json(results);

  });

});


// UPDATE PURCHASE ORDER
router.put("/:id", (req, res) => {

  const id = req.params.id;

  const { buyer_id, order_date, delivery_date, total_quantity, order_status } = req.body;

  const query = `
    UPDATE purchase_orders
    SET buyer_id=?, order_date=?, delivery_date=?, total_quantity=?, order_status=?
    WHERE po_id=?
  `;

  db.query(
    query,
    [buyer_id, order_date, delivery_date, total_quantity, order_status, id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Update failed");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Purchase order not found");
      }

      res.send("Purchase order updated successfully");

    }
  );

});


// DELETE PURCHASE ORDER
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM purchase_orders WHERE po_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Purchase order not found");
      }

      res.send("Purchase order deleted successfully");

    }
  );

});


module.exports = router;