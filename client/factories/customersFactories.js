Myapp.factory('customersFactory', function($http) {
	var factory = {};
	factory.getCustomers = function(callback) {
		$http.get('/get_customers').success(function(output){
			callback(output);
		})
	}
	factory.addCustomer = function(info, callback) {
		$http.post('/add_customer', info).success(function(output){
			callback(output)
		})
	}
	factory.deleteCustomer = function(info, callback) {
		$http.get('/delete_customer/'+ info._id).success(function(output){
			console.log(info._id)
			callback(output)
		})
	}
	return factory;
})