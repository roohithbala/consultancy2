const express = require("express");
const router = express.Router();

// HARDCODED ADMIN CREDENTIALS
const ADMIN = {
  username: "Admin",
  password: "Admin@Lara123"
};

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({ message: "Login successful" });
  } else {
    return res.status(401).send("Invalid credentials");
  }

});

module.exports = router;