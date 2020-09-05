const express = require("express");


var hotel = require('../hotel');
var room = require('../room');

const router = express.Router();

router.get('/addNewHotel', function(req, res) {
  res.render('addHotels')
})

router.post('/addNewHotel', function(req,res){
  console.log('here first');
  hotelAdder(req, res);
  res.redirect('/addNewHotel');
})

var hotelAdder = function(req, res) {
  console.log('ok here');
  var hotelName= 'a';
  var hotelLocation= 'b';
  var latitude = '27.2038° N';
  var longitude = '77.5011° E';
  var newHotel = {
    name : hotelName,
    location : hotelLocation,
    lat : latitude,
    lang : longitude
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
