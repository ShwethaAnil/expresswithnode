var mysql = require('mysql');
var con=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"admin",
    database:"itctest1"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="create table customer(cid int primary key,cname varchar(25))";
    con.query(sql,function(err){
        if(err) throw err;
        console.log("table created")
    });
});
