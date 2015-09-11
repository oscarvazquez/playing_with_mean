var mongoose = require('mongoose');

var customer = mongoose.model('customer')

var validate = require('validate.js');

module.exports = (function(){
	return {
		getCustomers: function(req, res) {
			customer.find({}, function(err, customer){
				if(err){
					console.log(err);
				}
				else
				{
					res.json(customer);
				}
			})
		},
		addCustomer: function(req, res){
			customer.findOne({name: req.body.name}, function(err, checkcustomer) 
			{
				if(checkcustomer)
				{
					res.json({errors: "that name already exists homie"})
				}
				else
				{
					var new_customer = new customer({name: req.body.name})
					new_customer.save(function (err, addedcustomer){
						if(err)
						{
							console.log(err);
						}
						else
						{
							console.log('succesfully added customer');
							customer.find({}, function(err, customer){
								if(err)
								{
									console.log(err);
								}
								else
								{
									res.json(customer);
								}
							})
						}
					})	
				}
			})
		},
		deleteCustomer: function(req, res){
			console.log('customers.js')
			customer.remove({_id: req.params.CustomerId}, function (err, customerDeleted){
				if(err)
				{
					console.log(err)
				}
				else
				{
					customer.find({}, function(err, customer){
						if(err)
						{
							console.log(err);
						}
						else
						{
							res.json(customer);
						}
					})
				}
			}) 		
		}
	}
})();