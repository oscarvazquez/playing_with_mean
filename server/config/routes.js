var orderController = require('./../controllers/orders.js')
var customerController = require('./../controllers/customers.js')
var productController = require('./../controllers/products.js');

module.exports = function(app){
	app.get('/get_customers', function(req, res){
		customerController.getCustomers(req, res);
	})
	app.get('/get_orders', function(req, res){
		orderController.getOrders(req, res);
	})
	app.get('/get_products', function(req, res){
		productController.getProducts(req, res);
	})	
	app.post('/add_customer', function(req, res) {
		customerController.addCustomer(req, res);
	})
	app.post('/add_order', function(req, res) {
		orderController.addOrder(req, res);
	})
	app.get('/delete_customer/:CustomerId', function(req, res){
		customerController.deleteCustomer(req, res);
	})
	app.post('/add_product', function(req, res){
		productController.addProduct(req, res);
	})
}