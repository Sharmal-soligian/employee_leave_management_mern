const express = require("express");
const router = express.Router();

const service = require("../../../services/employee/employee.registerService");

/* CREATE EMPLOYEE USER */
router.post("/register", async (req, res) => {
  const employeeData = req.body;
  try {
    const newEmployee = await service.createEmployee(employeeData);
    res
      .status(201)
      .json({ userId: newEmployee, message: "Employee user created Successfully" });
  } catch (err) {
    if (err.message === "Email already exists") {
      return res.status(400).json({ message: "Email is already registered" });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

/* EMPLOYEE LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginResult = await service.loginEmployee(email, password);
    res.status(200).json(loginResult);
  } catch (err) {
    res.status(401).json({ message: err.message }).send("Something went wrong");
  }
});

module.exports = router;
