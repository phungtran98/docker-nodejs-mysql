var express = require('express');
var http = require('http');
var mysql = require('mysql')
var app = express();
app.listen(3000);




var con = mysql.createConnection({
  host: 'mysql-host',
  user: 'root',
  password: 'root',
  database: 'node_mysql'
});

con.connect(function(err) {
  if (err) throw err;

  else
  {
    console.log("Connected!");
    app.get('/sinhvien',(req, res) => {
      let sql = "SELECT * FROM sinhvien";
      let query = con.query(sql, (err, sinhvien) => {
        if(err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(sinhvien));
      });
    });
    app.get('/sinhvien/:id',(req, res) => {
      let id =req.params.id;
      let sql = "SELECT * FROM sinhvien where sv_id = "+id;
      let query = con.query(sql, (err, sinhvien) => {
        if(err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(sinhvien));
      });
    });
  }
   
  
});





