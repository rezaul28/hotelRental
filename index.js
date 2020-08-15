const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('home');
});

app.post('/', function(req, res) {

})

app.listen(process.env.PORT || 3000, function() {
});
