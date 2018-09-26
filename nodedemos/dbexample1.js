var mysql = require('mysql');
var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"admin"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="create database itctest1";
    con.query(sql,function(err){
        if(err) throw err;
        console.log("database created")
    });
});
