const express = require("express");
const app = express();
const cors = require("cors");

/* environment conifg */
require("dotenv").config();

/* DB CONFIG */
const db = require("./config/db");

/* MIDDLEWARES */
app.use(express.json());
app.use(cors());

/* Routes & IMPORTS */
const adminRoutes = require("./controllers/register/admin/admin.registerController");
const employeeRoutes = require("./controllers/register/employee/employee.registerController");

app.use("/api/admin", adminRoutes);
app.use("/api/employee", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Server works");
});

db.query("SELECT 1")
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () =>
      console.log(
        `Server listening in port http://localhost:${process.env.PORT}`
      )
    );
  })
  .catch((err) => {
    console.log("Error connecting to DB!", err);
    process.exit(1);
  });
