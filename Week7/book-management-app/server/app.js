const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const bookRouter = require("./routes/book.router");
const { errorHandler } = require("./middlewares/errorHandler");
const notFound = require("./notFound");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://hiepnt:hiepicthust@my-cluster.1aqvicz.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use("/books", bookRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
