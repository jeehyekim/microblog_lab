var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/posts');

var db = mongoose.connect;

  console.log("db is open for business");


module.exports.Posts = require('./posts.js');