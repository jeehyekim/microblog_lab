var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

 // var db = require('models');

app.set('view engine', 'ejs');
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req,res){
	res.render('index');
});



app.listen(3000, function (){
  console.log("listening on port 3000");
});