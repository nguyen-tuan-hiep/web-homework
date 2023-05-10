const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

global.Task = require("./models/class.model");
const routes = require("./routes/class.router");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/student", { useNewUrlParser: true });

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

app.use((req, res) => {
	res.status(404).send({ url: `${req.originalUrl} not found` });
});
