
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

 var db = require('./models');

app.set('view engine', 'ejs');
app.use("/static",express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//index
app.get('/posts', function(req,res){
	db.Posts.find({}, function(err, posts) {
		if (err) console.log(err);
		res.render('index', {posts:posts});
	});
});
//show posts
app.get('/posts/:id', function(req,res){
	var post = posts[req.params.id];
	res.render('posts', {post:post});
});

 //create
app.post('/posts', function(req,res){
	console.log(req.body);
	var post = req.body;
	Posts.push(post);
	db.Posts.create(post, function(err, post) {
		if (err) console.log(err);
		res.json(post);
		console.log("Post request went through");
	});
});
// 
// app.delete('/posts/:_id', function(req, res) {
//     console.log('post id is: ', req.params);
//     db.Posts.find({
//         _id: req.params._id
//     }).remove(function(err, kitten) {
//         console.log("post deleted");
//         res.json("That post is deleted");
//     });
// });

app.listen(3000, function (){
  console.log("listening on port 3000");
});