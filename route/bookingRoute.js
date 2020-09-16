const express = require("express");


var room = require('../room');
var bookingSchema = require('../booking');

const router = express.Router();
const start = new Date("October 1, 2020");
const end = new Date("October 3, 2020");


router.get('/booking', function(req, res) {
  res.render('./room')
});



router.post('/booking', function(req, res) {
  console.log(req.body);
  bookingSchema.find({
    room: '5f4fb405e294812021d9660b'
  }, function(err, items) {
    console.log(items);
    if(err){
      console.log(err);
    }
    else if (items.length === 0) {
      completeBooking(req, res);
    } else {
      var flag = true;
      // for (let item of items) {
      //   if (item.startAt.getTime() === start.getTime() || item.endAt.getTime() === end.getTime() || (item.startAt.getTime()>start.getTime() && item.startAt.getTime()<end.getTime()) || (item.startAt.getTime()<start.getTime() && item.endAt.getTime()<end.getTime())) {
      //     console.log(item.startAt.getTime()+" "+start.getTime());
      //     console.log(item.endAt.getTime()+" "+end.getTime());
      //     flag =false;
      //     break;
      //   } else if (item.startAt.getTime() > start.getTime() && item.startAt.getTime() > end.getTime() && item.endAt.getTime() > start.getTime() && item.endAt.getTime() > end.getTime()) {
      //     flag=true;
      //   } else if (item.endAt.getTime() < start.getTime() && item.endAt.getTime() < end.getTime() && item.startAt.getTime() < start.getTime() && item.startAt.getTime() < end.getTime()) {
      //     flag=true;
      //   }
      // }
      if(flag){
        completeBooking(req,res);
      }else{
        console.log('booked before');
      }
    }

  });
});



var completeBooking = function(req, res) {

  var totalDays = Math.ceil((req.body.end - req.body.start) / 86400000);
  var totalGuests = 1;
  if (start < end) {
    console.log('true');
  } else {
    console.log('false');
  }
  // 5f4cc443567925113f5c21f2
  room.findById('5f4fb405e294812021d9660b', function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      var newBooking = {
        endAt: req.body.end,
        startAt: req.body.start,
        totalPrice: (result.price * req.body.totalDays),
        days: req.body.totalDays,
        guests: req.body.totalGuests,
        user: req.user,
        room: result
      }
      bookingSchema.create(newBooking, function(err, item) {
        if (err) {
          console.log(err);
        } else {
          console.log(item);
          console.log('new booking');
        }
      })
    }
  })
}

module.exports = router;
