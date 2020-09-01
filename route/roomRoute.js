const express = require("express");


var hotel = require('../hotel');
var room = require('../room');


const router=express.Router();

router.get('/room',function(req,res){
  // let ref;
  // hotel.find({name : 'abc'},function(err,item){
  //   ref=item[0];
  //   let obj={
  //     hotal:ref,
  //     price: 100
  //   }
  //   room.create(obj,(err,item ) => {
  //     if(err){
  //       console.log(err);
  //     }else{
  //       console.log('hotel');
  //     }
  //   })
  // })
  res.render('./room')

})

router.post('/room',function(req,res){

  res.redirect('/room')

})
module.exports = router;
