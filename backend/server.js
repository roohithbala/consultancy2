const express = require("express");
const cors = require("cors");

const buyersRoutes = require("./routes/buyers");
const purchaseOrdersRoutes = require("./routes/purchaseOrders");
const suppliersRoutes = require("./routes/suppliers");
const yarnRoutes = require("./routes/yarn");
const fabricRoutes = require("./routes/fabric");
const dyeingRoutes = require("./routes/dyeing");
const accessoriesRoutes = require("./routes/accessories");
const employeesRoutes = require("./routes/employees");
const packagingRoutes = require("./routes/packaging");
const authRoutes = require("./routes/auth");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/purchase-orders", purchaseOrdersRoutes);
app.use("/dyeing", dyeingRoutes);
app.use("/suppliers", suppliersRoutes);
app.use("/yarn", yarnRoutes);
app.use("/buyers", buyersRoutes);
app.use("/fabric", fabricRoutes);
app.use("/accessories", accessoriesRoutes);
app.use("/employees", employeesRoutes);
app.use("/packaging", packagingRoutes);
app.use("/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Textile Inventory System Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/buyers", (req, res) => {
  const { buyer_name, company_name, country, contact_number, email, address } = req.body;

  const query = `
    INSERT INTO buyers (buyer_name, company_name, country, contact_number, email, address)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [buyer_name, company_name, country, contact_number, email, address], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting buyer");
      return;
    }

    res.send("Buyer added successfully");
  });
});

app.get("/buyers", (req, res) => {
  db.query("SELECT * FROM buyers", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching buyers");
      return;
    }

    res.json(results);
  });
});