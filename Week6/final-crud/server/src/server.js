const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const routes = require("./routes/class.router");

dotenv.config();

// Connect to database
mongoose
  .connect("mongodb://127.0.0.1/student", { useNewUrlParser: true })
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.error("Database connection error:", error));

// Set up server
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
routes(app);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


module.exports = app;