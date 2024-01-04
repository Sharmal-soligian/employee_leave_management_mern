const express = require("express");
const router = express.Router();

const service = require("../../../services/admin/admin.registerService");

/* CREATE ADMIN USER */
router.post("/register", async (req, res) => {
  const adminData = req.body;
  try {
    const newAdmin = await service.createAdmin(adminData);
    res
      .status(201)
      .json({ userId: newAdmin, message: "ADMIN user created Successfully" });
  } catch (err) {
    console.log(err);
    if (err.message === "Email already exists") {
      return res.status(400).json({ message: "Email is already registered" });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

/* ADMIN LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginResult = await service.loginAdmin(email, password);
    res.status(200).json(loginResult);
  } catch (err) {
    res.status(401).json({ message: err.message }).send("Something went wrong");
  }
});

module.exports = router;
