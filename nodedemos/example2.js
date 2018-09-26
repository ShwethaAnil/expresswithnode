function display(){
    console.log("display message");
}

function display1(){
    console.log("display message 1");
}
var first=setTimeout(display,1000);

var second=setInterval(display1,2000);

var third=setImmediate(display);

//clearTimeout(first);

clearInterval(second);