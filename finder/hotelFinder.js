const express = require("express");


var hotel = require('../hotel');

const router = express.Router();

router.get('/findHotel',function(req,res){
  allHotels();
})

router.post('/findHotel',function(req,res){

})

var allHotels = function(){
  hotel.find({}, function(err, items){
    if(err){
      console.log(err);
    }else {
      console.log(items);
    }
  })
}

module.exports = router;
