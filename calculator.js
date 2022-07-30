const express = require("express");
const bodyParser = require("body-parser"); 

const app = express();
//bodyparser works with express

//whenever we want to grab the information that gets posted to your server from our html form you gonna be using urlencoded
app.use(bodyParser.urlencoded({extended:true}));//bodyparser.json(),bodyparser.text()

app.get("/",function(req,res){
    // res.send("hello world");
    res.sendFile(__dirname+"/index.html");
    // console.log(__dirname);
});
//body parser allow you to go any route and you can type into some req.body and this is the parsed version of the http request
app.post("/",function(req ,res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var ans = num1 + num2;
    res.send("the result of calculation is "+ ans);
});

app.listen(3000,function(){
    console.log("Server is started at 3000 local host");
});