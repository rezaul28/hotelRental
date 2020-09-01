const express = require("express");


var hotel = require('../hotel');
var room = require('../room');
var imgUpload = require('../fileSaver/imgSaver');

const router = express.Router();

router.get('/addNewRoom', function(req, res) {
  res.render('hotels')
})

router.post('/addNewRoom', imgUpload.single('image'), (req, res, next) => {
  console.log('here first');
  roomAdder(req, res);
  res.redirect('/addNewRoom');
})

var roomAdder = function(req, res) {
  var type=req.body.name;
  var costPerNight=req.body.desc;
  hotel.find({
    name: 'abc'
  }, function(err, item) {
    if (item.length === 0) {
      console.log('no hotel found');
    } else {
      var newRoom = {
        hotal : item[0],
        img : req.file.filename,
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
