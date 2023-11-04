// backend/index.js

const express = require("express");
const {connection} = require("./config/db"); // Import your database connection here
const oemSpecsRoutes = require("./routes/oemSpecsRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
app.use(express.json());

app.use("/api/oem-specs", oemSpecsRoutes);
app.use("/api/inventory", inventoryRoutes);

app.get("/", function (req, res) {
  res.send("Backend is working");
});

// Your database connection code goes here
// Ensure you have connected to the database before starting the server

const PORT = 8080;
app.listen(PORT, async () => {
  try {
    await connection; // Ensure you have connected to the database before starting the server
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("Failed to connect to the database");
  }
});
