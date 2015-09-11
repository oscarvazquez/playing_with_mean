Myapp.controller('ordersController', function($scope, ordersFactory, customersFactory, productsFactory){
	ordersFactory.getOrders(function(data){
		$scope.orders = data;
	})
	customersFactory.getCustomers(function(data){
		$scope.customers = data;
	})
	productsFactory.getProducts(function(data){
		$scope.products = data;
	})
	$scope.addOrders = function() {
		ordersFactory.addOrder($scope.new_order, function (data) {
			$scope.orders = data;
			$scope.new_order = {};
		})
	}
});