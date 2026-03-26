const express = require("express");
const router = express.Router();
const db = require("../db");


// ADD EMPLOYEE
router.post("/", (req, res) => {

  const {
    employee_name,
    gender,
    department,
    designation,
    salary,
    contact_number,
    email,
    address,
    hire_date
  } = req.body;

  const query = `
    INSERT INTO employees
    (employee_name, gender, department, designation, salary, contact_number, email, address, hire_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      employee_name,
      gender,
      department,
      designation,
      salary,
      contact_number,
      email,
      address,
      hire_date
    ],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Error adding employee");
      }

      res.send("Employee added successfully");

    }
  );

});


// VIEW EMPLOYEES
router.get("/", (req, res) => {

  const query = `
    SELECT * FROM employees
  `;

  db.query(query, (err, results) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching employees");
    }

    res.json(results);

  });

});


// UPDATE EMPLOYEE
router.put("/:id", (req, res) => {

  const id = req.params.id;

  const {
    employee_name,
    gender,
    department,
    designation,
    salary,
    contact_number,
    email,
    address,
    hire_date
  } = req.body;

  const query = `
    UPDATE employees
    SET
      employee_name=?,
      gender=?,
      department=?,
      designation=?,
      salary=?,
      contact_number=?,
      email=?,
      address=?,
      hire_date=?
    WHERE employee_id=?
  `;

  db.query(
    query,
    [
      employee_name,
      gender,
      department,
      designation,
      salary,
      contact_number,
      email,
      address,
      hire_date,
      id
    ],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Update failed");
      }

      res.send("Employee updated successfully");

    }
  );

});


// DELETE EMPLOYEE
router.delete("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM employees WHERE employee_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).send("Delete failed");
      }

      res.send("Employee deleted successfully");

    }
  );

});

module.exports = router;