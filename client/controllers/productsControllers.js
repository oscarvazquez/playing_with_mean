Myapp.controller('productsController', function($scope, productsFactory){
	console.log('im getting here1');

	productsFactory.getProducts(function(data){
		console.log('im getting here2');
		$scope.products = data;
	})
	$scope.addProduct = function() {
		productsFactory.AddProduct($scope.newProduct, function(data) {
			$scope.products = data;
		})
					$scope.newProduct = {};

	}
});