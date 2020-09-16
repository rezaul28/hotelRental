const express = require("express");


var hotel = require('../hotel');
var room = require('../room');

const router = express.Router();

router.get('/addNewHotel', function(req, res) {
  res.send({Status : "Successful"})
})

router.post('/addNewHotel', function(req,res){
  console.log();
  hotelAdder(req, res);
  res.redirect('/addNewHotel');
})

var hotelAdder = function(req, res) {
  var newHotel = {
    name : req.body.name,
    location : req.body.location,
    lat : req.body.lat,
    lang : req.body.lang
  }
  console.log(newHotel);
  hotel.create(newHotel, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log('new hotel created');
    }
  })
}

module.exports = router;
