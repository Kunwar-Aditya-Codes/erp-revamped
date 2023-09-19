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
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);
app.use(cookieParser());

app.use('/api/erp/v1/auth', require('./routes/auth.route'));
app.use('/api/erp/v1/course', require('./routes/course.route'));
app.use('/api/erp/v1/faculty', require('./routes/faculty.route'));
app.use('/api/erp/v1/student', require('./routes/student.route'));
app.use('/api/erp/v1/admin', require('./routes/admin.route'));

mongoose.connection.on('connected', () => {
  console.log('Connected to Db');
  app.listen(PORT, function () {
    console.log(`Server Started on ${PORT}`);
  });
});
