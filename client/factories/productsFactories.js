Myapp.factory('productsFactory', function($http){
	var factory = {}
	factory.getProducts = function(callback) {
		$http.get('/get_products').success(function(output){
			callback(output);
		})
	}
	factory.AddProduct = function(info, callback) {
		$http.post('/add_product', info).success(function(output){
			callback(output);
		})
	}
	return factory;
})