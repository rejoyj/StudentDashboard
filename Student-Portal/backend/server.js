const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Mongo error:", err));

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));

const studentRoutes = require("./routes/studentRoutes");      // for login etc.
const studentDashRoutes = require("./routes/studentdash");    // for profile etc.

app.use("/api/student", studentRoutes);
app.use("/api/studentdash", studentDashRoutes); // ✅ new route



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
