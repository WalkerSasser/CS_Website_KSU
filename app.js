var express = require("express");
var app = express();
const port = 4000;
var assignments = ["1","2","3","4","5","6"];

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/assignments", function(req, res) {
    res.render("assignments", {assignments:assignments});
});

app.listen(port, () => {
	console.log("Server started!!!");
});