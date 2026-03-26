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
const db = require("./db");
const fs = require("fs");
const path = require("path");


const app = express();

app.use(cors({
  origin: ["http://localhost:3000", /\.vercel\.app$/, /\.render\.com$/],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
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


// Auto-initialize Database
const initializeDatabase = () => {
  db.query("SHOW TABLES LIKE 'buyers'", (err, results) => {
    if (err) {
      console.error("Error checking database state:", err);
      return;
    }
    
    if (results.length === 0) {
      console.log("Database tables missing. Initializing from setup_database.sql...");
      const sqlPath = path.join(__dirname, "setup_database.sql");
      if (fs.existsSync(sqlPath)) {
        const sql = fs.readFileSync(sqlPath, "utf8");
        db.query(sql, (err) => {
          if (err) {
            console.error("Error during database initialization:", err);
          } else {
            console.log("Database initialized successfully!");
          }
        });
      } else {
        console.error("setup_database.sql not found at:", sqlPath);
      }
    } else {
      console.log("Database already initialized.");
    }
  });
};

initializeDatabase();

app.get("/", (req, res) => {
  res.send("Textile Inventory System Backend Running");
});

app.get("/api-status", (req, res) => {
  db.query("SHOW TABLES", (err, result) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "Database connection failed", error: err });
    }
    res.json({ status: "ok", message: "Database connected successfully", tables: result });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Redundant routes removed. Use routes/buyers.js instead.