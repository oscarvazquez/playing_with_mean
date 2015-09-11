var mongoose = require('mongoose');
var moment = require('moment')

var order = mongoose.model('order');

var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	quantity: {type: Number, default: 100},
	orders: [{type:Schema.ObjectId, ref: "order"}]
})

mongoose.model('product', productSchema);