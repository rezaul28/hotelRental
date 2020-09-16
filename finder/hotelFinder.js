const express = require("express");


var hotel = require('../hotel');

const router = express.Router();

router.get('/findHotel',function(req,res){
  allHotels(function(items){
    res.send(items);
  });
})

router.post('/findHotel',function(req,res){

})

var allHotels = function(callback){
  hotel.find({}, function(err, items){
    if(err){
      console.log(err);
    }else {
      return callback(items);
    }
  })
}

module.exports = router;
