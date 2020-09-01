var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    name : {
      type : String,
      require : true,
      unique : true
    },
    location : {
      type : String,
      require : true
    },
    lat : String,
    lang : String,
});
module.exports = new mongoose.model('Hotel', hotelSchema);
