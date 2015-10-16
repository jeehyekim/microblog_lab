var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");


app.get('/', function(req,res){
	res.send("testing");
});



app.listen(3000, function (){
  console.log("listening on port 3000");
});