var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var pwds = require('./pwds');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
mongoose.connect(pwds.mong);


var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
});
module.exports = app;