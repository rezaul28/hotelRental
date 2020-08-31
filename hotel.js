var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    name : {
      type : String,
      require : true,
      unique : true
    },
    image : [{type : String}],
    location : {
      type : String,
      require : true
    }
});
module.exports = new mongoose.model('Hotel', hotelSchema);
