Myapp.controller('customersController', function($scope, customersFactory) {
      customersFactory.getCustomers(function(data) {
        $scope.customers = data;
      });

      $scope.addCustomers = function() {
        customersFactory.addCustomer($scope.newCustomer, function(data) {
            if(data.errors)
            {
                $scope.errors = data.errors;

            }
            else
            {
                $scope.errors = ""
                $scope.customers = data;
            }
           $scope.newCustomer = {};
        });
      }

      $scope.deletecustomer = function(customerToDelete) {
        console.log('controller client');
        customersFactory.deleteCustomer(customerToDelete, function (data){
            $scope.customers = data;
        })
      }  

});