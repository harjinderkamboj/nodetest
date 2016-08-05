var express = require('express');
var app = express();

var links = "<a href='/'>Home</a> | <a href='/me'>Me</a> | <a href='/who/harjinder/developer'>Who</a><br />";

var pgHome = links + "hello node";

var pgMe = "<title>About me</title>" + links + "About me";

app.get('/', function(req, res){
  res.send(pgHome);
});

app.get('/me', function(req, res){
  res.send(pgMe);
});

app.get('/who/:name?/:title?', function(req, res){
  	var a = req.params.name;
	var b = req.params.title;
		res.send(links + a + "###" + b);
});

app.get('*', function(req, res){

		res.send(links + "Invalid route");

});

app.listen(80);
//app.listen(3000);
//console.log("Open http://localhost:3000 in browser");
