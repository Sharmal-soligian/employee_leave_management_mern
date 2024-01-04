const db = require("../../config/db");

module.exports.applyLeave = async (employeeId, leaveData) => {
  const { days, reason, department } = leaveData;
  console.log(leaveData);

  /* Save leave application */
  const [result] = await db.query(
    "INSERT INTO leave_application (employee_id, days, reason, department) VALUES (?, ?, ?, ?)",
    [employeeId, days, reason, department]
  );

  return result.insertId;
};

module.exports.getLeaveHistory = async (employeeId) => {
  const [leaveHistory] = await db.query(
    "SELECT * FROM leave_application WHERE employee_id = ?",
    [employeeId]
  );
  return leaveHistory;
};
