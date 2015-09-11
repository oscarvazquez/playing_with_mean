var Myapp = angular.module('Myapp', ['ngRoute']);

(function() {

	Myapp.config(function ($routeProvider) {
		$routeProvider
			.when('/',
			{
				controller: "dashboardController",
				templateUrl: 'partials/dashboard.html'
			})
			.when('/products',
			{
				controller: 'productsController',
				templateUrl:'partials/products.html'
			})
			.when('/customers',
			{
				controller:'customersController',
				templateUrl:'partials/customers.html'
			})

			.when('/orders',
			{
				controller:'ordersController',
				templateUrl:'partials/orders.html'
			})
			.when('/settings',
			{
				templateUrl:'partials/settings.html'
			})

			.otherwise({ redirectTo: '/'});
	})
}());