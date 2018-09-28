const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'test'
});

db.connect();

app.get('/data', function(req,res){
var sql = 'SELECT * FROM prods';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result);
});
});

app.post('/data', function(req, res){
	console.log(req.body); 
    var data = {name:req.body.name, quantity:req.body.quantity};
    var sql = 'INSERT INTO prods SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({
        status: 'Data inserted!',
        no: null,
		name: req.body.name,
		quantity: req.body.quantity
	});
});
});

app.listen(3210, ()=>{
    console.log('Server is started port 3210')
});