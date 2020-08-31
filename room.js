var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
    hotal : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Hotel"
    },
    image : [{type : String}],
    roomtype : String,
    price : Number,
    booking : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Booking"
    }
});
module.exports = new mongoose.model('Room', roomSchema);
