var fs = require("fs");

fs.appendFile('sample.txt',"is added", function(err){
if(err){
    console.log(err.stack);
    return;
}
console.log("done");
});


