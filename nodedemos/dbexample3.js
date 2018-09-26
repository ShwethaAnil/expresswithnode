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
 //   var sql="insert into customer values(2,'Samhitha')";
  var sql="select * from customer";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
    });
});
