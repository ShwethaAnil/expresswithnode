
var mongoClient = require('mongodb').MongoClient;

var url="mongodb://localhost:27017/Mongodb";
mongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("database created");
    db.close();
});