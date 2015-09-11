Myapp.factory('ordersFactory', function($http) {
	var factory ={};
	factory.getOrders = function(callback) {
		$http.get('/get_orders').success(function(output){
			callback(output)
		})
	}
	factory.addOrder = function(info, callback) {
		// var orderData = {name: info.name, product: info.product, quantity: info.quantity, date: new date()}
		$http.post('/add_order', info).success(function(output){
			callback(output)
		})
	}
	return factory;
})