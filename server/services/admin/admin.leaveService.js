const db = require("../../config/db");

/* GET all Leaves from DB */
module.exports.getLeaveSummary = async () => {
  const [summary] = await db.query(
    "SELECT department, COUNT(*) as totalLeaves FROM leave_application GROUP BY department"
  );
  return summary;
};
