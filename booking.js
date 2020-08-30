
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    endAt: {type: Date, required: 'Ending Date is required!'},
    startAt: {type: Date, required: 'Start Date is required!'},
    totalPrice: Number,
    days: Number,
    guests: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    room: {type: Schema.Types.ObjectId, ref: 'Room'}
});

module.exports = mongoose.model('Booking', bookingSchema);
