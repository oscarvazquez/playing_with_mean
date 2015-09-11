Myapp.controller('dashboardController', function($scope, ordersFactory, customersFactory, productsFactory){
	ordersFactory.getOrders(function(data){
		$scope.orders = data;
	})
	customersFactory.getCustomers(function(data){
		$scope.customers = data;
	})
	productsFactory.getProducts(function(data){
		$scope.products = data;
	})
})
