var mongo= require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/mdb";

mongo.connect(url, function(err,db){
    if(err) throw err;
    console.log("db created");
    db.close();
});
