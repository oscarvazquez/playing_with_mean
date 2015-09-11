var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
	name: String,
	date: { type: Date, default: new moment()},
	orders: [{ type:Schema.ObjectId, ref: "order"}]
})

mongoose.model('customer', customerSchema)