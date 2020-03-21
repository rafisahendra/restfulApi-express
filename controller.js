'use strict';

var response = require('./res');
var connectionMysql = require('./koneksi');


exports.index = function(req, res) {
    response.sukses("Hello from the Node JS RESTful SMK N Koto Besar", res)
};

exports.siswa = function(req, res) {  // Read data pada table siswa
    connectionMysql.query('SELECT * FROM siswa', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.sukses(rows, res)
        }
    });
};

exports.siswaAdd = function(req, res) { // Insert data ke table siswa
    // console.log('ok');
    let sql = "INSERT INTO siswa SET ?";
    let data = {first_name: req.body.first_name, last_name: req.body.last_name};
    connectionMysql.query(sql, data, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.sukses(rows, res)
        }
    });
};

exports.siswaGetById = function(req, res) { // Put  data ke table siswa berdasarkan Id
    // console.log('ok');
    let sql = "SELECT * FROM siswa WHERE siswa_id="+req.params.id;
    connectionMysql.query(sql, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.sukses(rows, res)
        }
    });
};

exports.siswaUpdate = function(req, res) { // Uupdate data ke table siswa
    // console.log('ok');
    let sql = "UPDATE siswa SET first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"' WHERE siswa_id="+req.params.id;
    connectionMysql.query(sql, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.sukses(rows, res)
        }
    });
};

exports.siswaDelete = function(req, res) { // Insert data ke table siswa
    // console.log('ok');
    let sql = "DELETE FROM siswa WHERE siswa_id="+req.params.id;
    connectionMysql.query(sql, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.sukses(rows, res)
        }
    });
};

