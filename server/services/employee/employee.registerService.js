const db = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.createEmployee = async (employeeDataData) => {
  /* Check for existing user */
  const [existingUser] = await db.query("SELECT * FROM employee WHERE email=?", [
    employeeDataData.email,
  ]);

  if (existingUser && existingUser.length) {
    throw new Error("Email already exists");
  }

  /* Password hash */
  const hashedPassword = await bcrypt.hash(employeeDataData.password, 10);
  employeeDataData.password = hashedPassword;

  const [result] = await db.query("INSERT INTO employee SET ?", [employeeDataData]);
  return result.insertId;
};

module.exports.loginEmployee = async (email, password) => {
  const [user] = await db.query("SELECT * FROM employee WHERE email=?", [email]);

  if (!user || !user.length) {
    throw new Error("Invalid email");
  }

  const passwordMatch = await bcrypt.compare(password, user[0].password);

  if (!passwordMatch) {
    throw new Error("Invalid Password");
  }

  const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return { userId: user[0].id, token };
};
