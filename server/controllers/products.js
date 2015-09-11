var mongoose = require('mongoose');
var product = mongoose.model('product');

module.exports = (function(){
	return {
		getProducts: function(req, res){
			product.find({}, function(err, product){
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(product);
				}
			})
		},
		addProduct: function(req, res){
			var new_product = new product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity})
			new_product.save(function (err, addedproduct){
				if(err)
				{
					console.log(err);
				}
				else
				{
					console.log('succesfully added product');
					product.find({}, function(err, product){
						if(err)
						{
							console.log(err)
						}
						else
						{
							res.json(product);
						}
					})
				}
			})
		}
	}
})();