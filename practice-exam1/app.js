var express = require('express');
var session = require('express-session');

var path = require('path');
var app = express();

// Setup serving static assets
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {title: 'SSS - Practice exam 1'});
});

// Start the server
app.listen(3000, function(){
  console.log('App listening at http://localhost:3000');
});