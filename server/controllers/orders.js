var mongoose = require('mongoose');

var order = mongoose.model('order');
var product = mongoose.model('product');
var customer = mongoose.model('customer');

module.exports = (function(){
	return {
		getOrders: function(req, res){
			order.find({}, function(err, order) {
				if(err){
					console.log(err);
				}
				else
				{
					res.json(order);
				}
			})
		},
		addOrder: function(req, res){
			product.findOne({name: req.body.product}, function(err, found_product){
				customer.findOne({name: req.body.name}, function(err, found_customer){
				var new_order = new order({name: req.body.name, product: req.body.product, quantity: req.body.quantity})
				new_order._product = found_product._id;
				new_order._customer = found_customer._id;
				found_product.quantity -= req.body.quantity;
				found_product.orders.push(new_order._id);
				found_customer.orders.push(new_order._id);
				console.log(new_order);
				console.log(found_product);
				new_order.save(function(err) {
					found_product.save(function(err){
						found_customer.save(function(err){
					if(err)
					{
						console.log(err);
					}
					else
					{
						console.log('succesfullAdd')
						order.find({}, function(err, order){
							if(err)
							{
								console.log(err)
							}
							else
							{
								res.json(order);
							}
						})
					}
					})
						})
				})
				})
			})
		}
	}
})();