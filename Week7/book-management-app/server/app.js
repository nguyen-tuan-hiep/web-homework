const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {connect} = require("mongoose");

const bookRouter = require("./routes/book.router");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://hoangk2hust:TP5OkwB7fIoT4Ubj@cluster0.w2dcpdj.mongodb.net/book",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/books", bookRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

module.exports = app;