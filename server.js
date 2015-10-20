
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
app.get('/', function(req,res){
	db.Posts.find({}, function(err, posts) {
		if (err) console.log(err);
		res.render('index', {posts:posts});
		console.log(posts);
	});
});

//create

app.post ('/posts', function (req,res){
	console.log(req.body);
	db.Posts.create({content: req.body.post}, function(err,post) {
		console.log("post request went through");
		if(err) console.log(err);
		res.json(post);
	});
});


//delete

app.delete('/posts/:_id', function(req, res) {
    console.log('post id is: ', req.params._id);
    db.Posts.find({
        _id: req.params._id
    }).remove(function(err, post) {
        console.log("post deleted");
        res.json("That post is deleted");
    });
});

// db.Posts.find({}, function(err, posts){
// 	posts[0].remove();
// 	});

//show posts
app.get('/posts/:id', function(req,res){
	var post = posts[req.params.id];
	res.render('posts', {post:post});
});

 //create
// app.post('/posts', function(req,res){
// 	console.log(req.body);
// 	var post = req.body;
// 	Posts.push(post);
// 	db.Posts.create(post, function(err, post) {
// 		if (err) console.log(err);
// 		res.json(post);
// 		console.log("Post request went through");
// 	});
// });



app.listen(3000, function (){
  console.log("listening on port 3000");
});