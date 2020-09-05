const express = require("express");


var hotel = require('../hotel');
var room = require('../room');

const router = express.Router();

router.get('/findRoom',function(req,res){
  findRooms(req,res, function(rooms){
    console.log(rooms);
  });
})

router.post('/findRoom', function(req,res){

})


var findRooms = function(req,res,callback){
  var hotelId = '5f4e9a7d74dea048c9d43a2b';
  room.find({hotal : hotelId},function(err,items){
    if(err){
      console.log(err);
    }else{
      // console.log(items);
      return  callback(items);
    }
  });
}

module.exports = router;
