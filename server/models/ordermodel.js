var mongoose = require('mongoose');
var moment = require('moment')
var Schema = mongoose.Schema;


var orderSchema = new mongoose.Schema({
	name: String,
	product: String, 
	_product: {type:Schema.ObjectId, ref: "product"},
	_customer: {type:Schema.ObjectId, ref: "customer"},
	quantity: Number,
	date: { type: Date, default: new moment()}
})

mongoose.model('order', orderSchema);