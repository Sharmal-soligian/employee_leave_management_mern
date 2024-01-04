const express = require("express");
const router = express.Router();
const leaveService = require("../../services/admin/admin.leaveService");

/* GET All Leave Details */
router.get("/leave-summary", async (req, res) => {
    try {
      const leaveSummary = await leaveService.getLeaveSummary();
      res.status(200).json(leaveSummary);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
