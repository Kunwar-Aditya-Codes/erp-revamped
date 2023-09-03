require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const db = require('./config/db');

const PORT = process.env.PORT || 4000;
const app = express();

db();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/erp/v1/auth', require('./routes/auth.route'));

mongoose.connection.on('connected', () => {
  console.log('Connected to Db');
  app.listen(PORT, function () {
    console.log(`Server Started on ${PORT}`);
  });
});
