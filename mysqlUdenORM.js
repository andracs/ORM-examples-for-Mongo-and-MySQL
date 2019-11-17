var mysql = require('mysql2');
var connection = require('./settings').mysql_connection;

var con = mysql.createConnection(connection);

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM brugere", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.close();
  });
});