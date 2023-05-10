const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World, again!');
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});