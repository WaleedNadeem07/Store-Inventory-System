// import dotenv from 'dotenv'

// import dotenv from 'dotenv'

var {fileURLToPath} = require('url');
var mysql = require('mysql');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var db = require('./database');

// 👇️ "/home/john/Desktop/javascript"

// const {MongoClient} = require('mongodb');

var router = express.Router();

const app = express();

// router.get('/user-list', function(req, res, next) {
//   var sql='USE 2; Select * from employees';
//   db.query(sql, function (err, data, fields) {
//   if (err) throw err;
//   res.render('user-list', { title: 'Employee List', userData: data});
// });
// });
// module.exports = router;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// app.get('/', (req, res) => {
//   //console.log(__dirname)
//   res.sendFile(__dirname+"/templates/user-list.ejs");
// })

app.get('/', (req, res) => {
  //console.log(__dirname)
  res.sendFile(__dirname+"/templates/home.html");
})

app.use(express.static(__dirname +'/templates'));

let port = 3030
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
