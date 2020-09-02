const express = require("express");


var hotel = require('../hotel');
var room = require('../room');
var imgUpload = require('../fileSaver/imgSaver');

const router = express.Router();

router.get('/addNewRoom', function(req, res) {
  res.render('hotels')
})

router.post('/addNewRoom',function(req,res) {
  var photos =[];
  imgUpload(req,res,function(err){
    if(err){
      console.log(err);
    }else{
      req.files.forEach((item, i) => {
        photos.push(item.filename)
      });
      roomAdder(req,res,photos);
      photos = [];
    }
  })
  res.redirect('/addNewRoom');
})

var roomAdder = function(req, res, photos) {
  var type=req.body.name;
  var costPerNight=req.body.desc;
  hotel.find({
    name: 'a'
  }, function(err, item) {
    if (item.length === 0) {
      console.log('no hotel found');
    } else {
      var newRoom = {
        hotal : item[0],
        image : photos,
        roomtype : type,
        price : costPerNight
      }
      console.log(newRoom);
      room.create(newRoom, (err, item) => {
        if (err) {
          console.log(err);
        } else {
          console.log('new room created');
        }
      })
    }
  })
}

module.exports = router;
