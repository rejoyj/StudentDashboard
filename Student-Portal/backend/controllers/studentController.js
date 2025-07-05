const Student = require("../models/Student");

const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (student.password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    res.json({ message: "Login successful", student });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

module.exports = { loginStudent };
