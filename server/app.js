const express = require('express');
const mysql = require('mysql');
const api = require('./routes/api');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'forum'
});
global.connectionPool = connectionPool;

app.use('/api', api);

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {};
  console.log(err.message);
  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
