
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

 var db = require('./models');

app.set('view engine', 'ejs');
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req,res){
	db.Posts.find({}, function(err, posts) {
		if (err) console.log(err);
		res.render('index', {posts:posts});
	});
});

// app.get('/api/posts', function(req,res){
// 	res.json(posts);
// });

app.post('/posts', function(req,res){
	console.log(req.body);
	db.Posts.create(req.body, function(err, posts) {
		if (err) {
			console.log(err);
		}
		res.render('posts', {posts:posts});
	});
});


app.listen(3000, function (){
  console.log("listening on port 3000");
});