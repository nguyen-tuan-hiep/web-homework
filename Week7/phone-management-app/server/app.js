const express = require("express");
const cors = require("cors");
const {connect} = require("mongoose");
const dotenv = require("dotenv");
const phoneRouter = require("./routes/phone.router");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound")
require('dotenv').config();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://hoangk2hust:TP5OkwB7fIoT4Ubj@cluster0.w2dcpdj.mongodb.net/phone",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

// Allow requests from any origin
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/phones", phoneRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

module.exports = app;
