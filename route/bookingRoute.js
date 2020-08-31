const express = require("express");


var room = require('../room');
var bookingSchema = require('../booking');

const router = express.Router();

router.get('/booking', function(req, res) {
  res.render('./room')
});



router.post('/booking', function(req, res) {
  if (req.isAuthenticated()) {
    completeBooking(req, res);
  } else {
    var start = new Date("September 1, 2020 12:00:00");
    var end = new Date("September 3, 2020 12:00:00");
    console.log();
  }
});



var completeBooking = function(req, res) {
  var start = new Date("September 1, 2020 12:00:00");
  var end = new Date("September 2, 2020 12:00:00");
  var totalDays = Math.ceil((end - start) / 86400000);
  var totalGuests = 5;
  if (start < end) {
    console.log('true');
  } else {
    console.log('false');
  }
  // 5f4cc443567925113f5c21f2
  room.findById('5f4cc443567925113f5c21f2', function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      var newBooking = {
        endAt: end,
        startAt: start,
        totalPrice: (result.price * totalDays),
        days: totalDays,
        guests: totalGuests,
        user: req.user,
        room: result
      }
      bookingSchema.create(newBooking, function(err, item) {
        if (err) {
          console.log(err);
        } else {
          console.log(item);
        }
      })
    }
  })
}

module.exports = router;
