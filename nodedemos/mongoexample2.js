var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MongoDatabase");
  myObj={name:'Ganesh',address:'Banasawadi', city:'Tum'};
  dbo.collection("customers").insertOne(myObj, function(err, res) {
    if (err) throw err;
    console.log("record inserted");
    db.close();
  });
});