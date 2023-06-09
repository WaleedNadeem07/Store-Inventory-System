var express = require('express');
var router = express.Router();
var db=require('../database');


router.get('/user-list', function(req, res, next) {
  var sql='USE 2;Select * from employees;';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('user-list', { title: 'Employee List', userData: data});
  });
});
module.exports = router;
