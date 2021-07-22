var mysql = require('mysql');

var con = mysql.createConnection({
  database: 'grato',
  host: "localhost",
  user: "grato_user",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;