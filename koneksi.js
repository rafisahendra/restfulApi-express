var mysql = require('mysql');

var koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api_smknkotobesar"
});

koneksi.connect(function (err){
    if(err) throw err;
});

module.exports = koneksi;