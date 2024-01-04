const express = require("express");
const router = express.Router();
const leaveService = require("../../services/employee/employee.leaveService");

/* CREATE Leave Application */
router.post("/apply-leave", async (req, res) => {
  const { userId, days, reason, department } = req.body;

  try {
    const leaveId = await leaveService.applyLeave(userId, {
      days,
      reason,
      department,
    });
    res
      .status(201)
      .json({ leaveId, message: "Leave application submitted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* GET leave application data */
router.get("/leave-history/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const leaveHistory = await leaveService.getLeaveHistory(userId);
    res.status(200).json(leaveHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
