const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");
const {
  MongoClient
} = require("mongodb");


const app = express();
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/userInfoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var userlogin = null;
const userInfoDBSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userInfoDBSchema);


app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('home');


});

app.get('/:topic', function(req, res) {
  let route = req.params.topic;
  if (route === 'login' || route === 'signup') {
    res.render(route);
  }
})


app.post('/:topic', function(req, res) {
  let route = req.params.topic;
  if (route === 'enter') {
    let btnValue = req.body.btn;
    res.redirect('/' + btnValue)
  }
  if (route === 'signup') {
    saveNewUserInfo(req);
    res.render('successful');
  }
  if (route === 'login') {
    let userEmail = req.body.mail;
    let userPass = req.body.password;
    User.find({
      'email': userEmail,
      'password' : userPass
    }, function(err, user) {
      console.log(user);
      if (err) {
        console.log(err);
      }
      else if (user.length<1) {
        res.render('failed');
      }
      else {
        res.render('successful');
      }
    })
    }
})

function saveNewUserInfo(req) {
  let userName = req.body.name;
  let userEmail = req.body.mail;
  let userPass = req.body.password;
  const newUser = new User({
    name: userName,
    email: userEmail,
    password: userPass
  });
  newUser.save();
}

function checkUserValidity(req,res) {


}


app.listen(process.env.PORT || 3000, function() {});
