const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRouter = require("./routes/blog.router");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB database
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// Allow requests from any origin
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

blogRouter(app);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

module.exports = app;
